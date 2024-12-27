import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const CHUNK_SIZE = 1024 * 1024 * 2 // 2MB chunks

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const filePath = searchParams.get('file')

  if (!filePath) {
    return new NextResponse('File path not provided', { status: 400 })
  }

  const fullPath = path.join(process.cwd(), 'public', filePath)

  try {
    const stat = fs.statSync(fullPath)
    const fileSize = stat.size
    const range = request.headers.get('range')

    if (range) {
      const parts = range.replace(/bytes=/, '').split('-')
      const start = parseInt(parts[0])
      const end = parts[1]
        ? parseInt(parts[1])
        : Math.min(start + CHUNK_SIZE, fileSize - 1)

      if (start >= fileSize) {
        return new NextResponse('Requested range not satisfiable', {
          status: 416,
          headers: {
            'Content-Range': `bytes */${fileSize}`,
          },
        })
      }

      const videoStream = fs.createReadStream(fullPath, { start, end })
      const contentLength = end - start + 1

      const headers = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': `${contentLength}`,
        'Content-Type': 'video/mp4',
      }

      return new NextResponse(videoStream as any, {
        status: 206,
        headers,
      })
    } else {
      const videoStream = fs.createReadStream(fullPath)

      const headers = {
        'Content-Length': `${fileSize}`,
        'Content-Type': 'video/mp4',
      }

      return new NextResponse(videoStream as any, {
        status: 200,
        headers,
      })
    }
  } catch (error) {
    return new NextResponse(`Error streaming video: err: ${error}`, {
      status: 500,
    })
  }
}

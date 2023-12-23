/* eslint-disable @next/next/no-img-element */
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'

export function ImageGallery({
  img_1,
  img_2,
  img_3,
  video_1,
  video_2,
  video_3,
}: {
  img_1: string
  img_2: string
  img_3: string
  video_1?: string
  video_2?: string
  video_3?: string
}) {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="max-w-xl rounded-lg border"
    >
      <ResizablePanel defaultSize={55}>
        <div className="flex h-[300px] items-center justify-center p-2">
          {(video_1 && (
            <video autoPlay muted loop>
              <source src={`/2023/${video_1}.mp4`} type="video/mp4" />
            </video>
          )) ||
            (img_1 && (
              <img
                loading="lazy"
                src={`/2023/${img_1}.jpg`}
                alt={img_1.split('/')[1].replace('.jpg', '')}
                className="flex-1"
              />
            ))}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={45}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-2">
              {(video_2 && (
                <video autoPlay muted loop>
                  <source src={`/2023/${video_2}.mp4`} type="video/mp4" />
                </video>
              )) ||
                (img_2 && (
                  <img
                    loading="lazy"
                    src={`/2023/${img_2}.jpg`}
                    alt={img_2.split('/')[1].replace('.jpg', '')}
                    className="flex-1"
                  />
                ))}
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-2">
              {(video_3 && (
                <video autoPlay muted loop>
                  <source src={`/2023/${video_3}.mp4`} type="video/mp4" />
                </video>
              )) ||
                (img_3 && (
                  <img
                    loading="lazy"
                    src={`/2023/${img_3}.jpg`}
                    alt={img_3.split('/')[1].replace('.jpg', '')}
                    className="flex-1"
                  />
                ))}
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

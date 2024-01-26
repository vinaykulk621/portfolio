export default function formatDate(date: string) {
  const currentDate = new Date()
  const targetDate = new Date(date)

  const timeDifference: number = Math.abs(currentDate - targetDate)
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

  if (daysAgo < 1) {
    return 'Today'
  } else if (daysAgo < 7) {
    return `(${daysAgo}${daysAgo === 1 ? 'd' : 'days'} ago)`
  } else if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7)
    return `(${weeksAgo}wk ago)`
  } else if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30)
    return `(${monthsAgo}${monthsAgo === 1 ? 'mo' : 'mos'} ago)`
  } else {
    const yearsAgo = Math.floor(daysAgo / 365)
    return `(${yearsAgo}${yearsAgo === 1 ? 'y' : 'ys'} ago)`
  }
}

export function getDateOnly(date: string) {
  const targetDate = new Date(date)
  const fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
  return fullDate
}

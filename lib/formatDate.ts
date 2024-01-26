export default function formatDate(date: string) {
  const currentDate = new Date()
  const targetDate = new Date(date)

  const timeDifference: number = Math.abs(currentDate - targetDate)
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

  const fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  if (daysAgo < 1) {
    return 'Today'
  } else if (daysAgo < 7) {
    return `${fullDate} ${daysAgo} ${daysAgo === 1 ? 'day' : 'days'} ago`
  } else if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7)
    return `${fullDate} ${weeksAgo} ${weeksAgo === 1 ? 'week' : 'weeks'} ago`
  } else if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30)
    return `${fullDate} ${monthsAgo} ${
      monthsAgo === 1 ? 'month' : 'months'
    } ago`
  } else {
    const yearsAgo = Math.floor(daysAgo / 365)
    return `${fullDate} ${yearsAgo} ${yearsAgo === 1 ? 'year' : 'years'} ago`
  }
}

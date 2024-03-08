import dayjs from 'dayjs'
import { matchPath } from 'react-router-dom'
import { ICompetitionCode, IDateOption } from 'interfaces'

export const scheduleOrScore = (info): string | undefined => {
  switch (info.status) {
    case 'FINISHED':
      return `${info.score.fullTime.home} - ${info.score.fullTime.away}`
    case 'IN_PLAY':
      return `${info.score.fullTime.home} - ${info.score.fullTime.away}`
    case 'SCHEDULED':
    case 'TIMED':
      return dayjs(info.utcDate).format('H-mm')
    case 'PAUSED':
      return 'break'
  }
}

export const checkPathname = (pathname: string): boolean => {
  const match = matchPath('/:league/:date', pathname)

  const league = match?.params?.league as ICompetitionCode
  const date = match?.params?.date as IDateOption

  const isValidLeague = Object.values(ICompetitionCode).includes(league)
  const isValidDate = Object.values(IDateOption).includes(date)

  return isValidLeague && isValidDate
}

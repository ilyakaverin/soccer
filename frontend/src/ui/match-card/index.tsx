import styles from './style.module.scss'
import { Team } from '../team'
import { Score } from '../score'

export const MatchCard = ({ info }) => {
  return (
    <section className={styles.match_card}>
      <Team logo={info.homeTeam.crest} name={info.homeTeam.shortName} />
      <Score info={info} />
      <Team logo={info.awayTeam.crest} name={info.awayTeam.shortName} />
    </section>
  )
}

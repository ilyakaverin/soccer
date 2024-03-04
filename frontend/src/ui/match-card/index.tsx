import styles from './style.module.scss'
import { Team } from '../team';
import { scheduleOrScore } from '../../helper';

export const MatchCard = ({ info }) => (
    <section className={styles.match_card}>
        <Team logo={info.homeTeam.crest} name={info.homeTeam.shortName} />
        <span className={styles.currentScore}>{scheduleOrScore(info)}</span>
        <Team logo={info.awayTeam.crest} name={info.awayTeam.shortName} />
    </section>
)

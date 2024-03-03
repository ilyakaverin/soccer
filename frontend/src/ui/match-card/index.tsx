import dayjs from 'dayjs'
import styles from './style.module.scss'

export const MatchCard = ({ info }) => {

    const scheduleOrScore = (info) => {

        switch(info.status) {
            case 'FINISHED':
                return `${info.score.fullTime.home} - ${info.score.fullTime.away}`;
            case 'IN_PLAY':
                return 'Live'
            case 'SCHEDULED':
            case 'TIMED':
                return dayjs(info.utcDate).format('H-mm')

        }
    }


    return (
        <section className={styles.match_card}>
            <img src={info.homeTeam.crest} alt="flag" />
            <span>{info.homeTeam.shortName}</span>
            <span>{scheduleOrScore(info)}</span>
            <span>{info.awayTeam.shortName}</span>
            <img src={info.awayTeam.crest} alt="flag" />
        </section>
    )
}

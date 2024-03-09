import styles from './style.module.scss'
import { Team } from 'ui/team'
import { Score } from 'ui/score'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const MatchCard: React.FC = ({ info }) => {
  const navigate = useNavigate()

  return (
    <section className={styles.match_card} onClick={() => { navigate(`/match/${info.id}`)}}>
      <Team logo={info.homeTeam.crest} name={info.homeTeam.shortName} />
      <Score info={info} />
      <Team logo={info.awayTeam.crest} name={info.awayTeam.shortName} />
    </section>
  )
}

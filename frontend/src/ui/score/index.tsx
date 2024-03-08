import React from 'react'
import { scheduleOrScore } from 'helper'
import styles from './style.module.scss'

export const Score: React.FC = ({ info }) => {
  return (

        <div className={styles.score}>
            <span className={styles.currentScore}>{scheduleOrScore(info)}</span>
            <span>{info.status}</span>
        </div>
  )
}

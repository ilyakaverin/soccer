import React from 'react'
import styles from './style.module.scss'

interface IStubProps {
  text: string
}

export const Stub: React.FC<IStubProps> = ({ text }) => <div className={styles.stub}>{text}</div>

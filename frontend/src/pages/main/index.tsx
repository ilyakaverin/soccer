import { useFixturesQuery } from 'api'
import { ICompetitionCodeDescription, IDateOption } from 'interfaces'
import { Stub } from 'ui/atoms/stub'
import { Select } from 'ui/atoms/select'
import { MatchCard } from 'ui/match-card'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './style.module.scss'
import React from 'react'

export const MainPage: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const { data, isFetching } = useFixturesQuery({ path: location.pathname })

  const locationArray = location.pathname.split('/')
  const [, league, date] = locationArray

  const selectLeagueOptions = Object.entries(ICompetitionCodeDescription).map(
    (option) => ({ value: option[0], label: option[1] })
  )

  const dateOptions = Object.entries(IDateOption).map((option) => ({
    value: option[0],
    label: option[1]
  }))

  const handleChange = (event: Event): void => {
    const selectedValue = event.target as HTMLInputElement

    const path = locationArray
      .map((item, index) => {
        if (index === 2) return selectedValue.value
        return item
      })
      .join('/')

    navigate(path, { replace: true })
  }

  const handleOtherChange = (event: Event): void => {
    const selectedValue = event.target as HTMLInputElement

    const path = locationArray
      .map((item, index) => {
        if (index === 1) return selectedValue.value
        return item
      })
      .join('/')

    navigate(path, { replace: true })
  }

  return (
    <article className={styles.wrapper}>
      <section className={styles.controls}>
        <Select
          defaultValue={league}
          options={selectLeagueOptions}
          name="selectLeagueOptions"
          onChange={handleOtherChange}
        />
        <Select
          defaultValue={date}
          options={dateOptions}
          name="dateOptions"
          onChange={handleChange}
        />
      </section>
      {isFetching
        ? (
        <Stub text="loading" />
          )
        : data.matches.length > 0
          ? (
              data.matches.map((item) => <MatchCard key={item.id} info={item} />)
            )
          : (
        <Stub text="no matches" />
            )}
    </article>
  )
}

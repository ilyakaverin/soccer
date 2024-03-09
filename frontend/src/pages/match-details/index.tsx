import { useMatchQuery } from 'api/index'
import React from 'react'
import { useLocation } from 'react-router-dom'

export const MatchDetails: React.FC = () => {
  const location = useLocation()

  const id = location.pathname.match(/\d+/g)

  const { data, isFetching } = useMatchQuery({ id })

  console.log(data)
  return (
        <span>hi {id} </span>
  )
}

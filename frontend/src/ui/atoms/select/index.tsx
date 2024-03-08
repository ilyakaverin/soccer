import React from 'react'
import styles from './style.module.scss'

interface ISelect {
  options: Array<{
    value: string
    label: string
    selected?: boolean
  }>
  name: string
  onChange: (value: unknown) => void
  defaultValue: string
}

export const Select: React.FC<ISelect> = ({
  options,
  name,
  onChange,
  defaultValue
}) => (
    <div className={styles.select}>
      <select
        defaultValue={defaultValue}
        id={name}
        name={name}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
)

import styles from './style.module.scss'

export const Team = ({ logo, name }) => {


    return (
        <div className={styles.team}>
            <img src={logo} alt="logo" />
            <span>{name}</span>
        </div>
    )

}

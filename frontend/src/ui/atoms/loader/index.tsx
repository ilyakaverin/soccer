import styles from './style.module.scss';

export const Loader = ({ text }) => {

    return (
        <div className={styles.loader}>{text}</div>
    )
}

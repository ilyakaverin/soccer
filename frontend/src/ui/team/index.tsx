import React from 'react';
import styles from './style.module.scss';

interface ITeamProps {
    logo: string;
    name: string;
}

export const Team: React.FC<ITeamProps> = ({ logo, name }) => {


    return (
        <div className={styles.team}>
            <img width={50} height={50} loading='lazy' src={logo} alt="logo" />
            <span>{name}</span>
        </div>
    )

}

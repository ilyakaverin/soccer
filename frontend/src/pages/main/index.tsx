import { useFixturesQuery } from "../../api";
import { MatchCard } from "../../ui/match-card";
import styles from './style.module.scss'

export const MainPage = () => {

    const { data, isFetching} = useFixturesQuery({});

    console.log(data?.matches)

    return (
        isFetching ? 'loading' : <article className={styles.wrapper}> {data.matches.map(item => <MatchCard key={item.id} info={item} />)}</article> )
}

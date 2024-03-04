import { useFixturesQuery } from "../../api";
import { ICompetitionCodeDescription, IDateOption } from "../../interfaces";
import { Select } from "../../ui/atoms/select";
import { MatchCard } from "../../ui/match-card";
import styles from "./style.module.scss";
import { useLocation, useNavigate } from "react-router-dom";

export const MainPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data, isFetching } = useFixturesQuery({ path: location.pathname });

  const locationArray = location.pathname.split('/');
  const [, league, date] = locationArray;

  const selectLeagueOptions = Object.entries(ICompetitionCodeDescription).map(
    (option) => ({ value: option[0], label: option[1] })
  );

  const dateOptions = Object.entries(IDateOption).map((option) => ({
    value: option[0],
    label: option[1],
  }));

  const handleChange = (event: Event) => {
    const selectedValue = event.target as HTMLInputElement

    const path = locationArray.map((item, index) => {
        if(index === 2) return selectedValue.value;
        return item
    }).join('/')

    navigate(path, { replace: true });
  };

  const handleOtherChange = (event: Event) => {
    const selectedValue = event.target as HTMLInputElement

    const path = locationArray.map((item, index) => {
        if(index === 1) return selectedValue.value;
        return item
    }).join('/')
    
    navigate(path, { replace: true });
  };

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
        ? "loading"
        : data.matches.length > 0 ? data.matches.map((item) => <MatchCard key={item.id} info={item} />) : 'no matches'}
    </article>
  );
};

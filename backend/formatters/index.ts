import { ICompetitionCode, IDateOption } from "../interfaces";

export const getPath = (url: string) => {
    const urlObject = new URL(url);

    const  { league, date, matchId } = urlObject.pathname.split('/').filter(item => item).filter(item => item !== 'api').reduce((acc, item) => {

        if(Object.values(ICompetitionCode).includes(item)) {
            acc.league = item
        } else if (Object.values(IDateOption).includes(item)) {
            acc.date = item
        } else if(typeof Number(item) === 'number') {
            acc.matchId = item
        }

        return acc
} ,{});

    

    return { league, date, matchId } 
}

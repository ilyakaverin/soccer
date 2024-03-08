import type { ICompetitionCode, IDateOption } from "../interfaces";

export const getPath = (url: string) => {
    const urlObject = new URL(url);

    const [,, league, date] = urlObject.pathname.split('/');

    return { league, date }
}

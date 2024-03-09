import dayjs from "dayjs";
import { ICompetitionCode, IDateOption } from "../interfaces";

const BASE = 'https://api.football-data.org/v4'
const currentDate = dayjs().format('YYYY-MM-DD');
const yesterday = dayjs().subtract(1, 'day').format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');

const BASE_PARAMETERS =  {
    method: "GET",
    headers: { "X-Auth-Token": "941f80a314174aac9e8b905617d11054" },
}


const links = (league: ICompetitionCode, path: string): string=> {

    const data: Record<string, string> = {

        today: `competitions/${ICompetitionCode[league]}/matches?dateFrom=${currentDate}&dateTo=${currentDate}`,
        yesterday: `competitions/${ICompetitionCode[league]}/matches?dateFrom=${yesterday}&dateTo=${yesterday}`,
        tomorrow: `competitions/${ICompetitionCode[league]}/matches?dateFrom=${tomorrow}&dateTo=${tomorrow}`
    
    }

    return data[path]
} 

export const getFixtures = async ( league: ICompetitionCode , date: IDateOption ) => {

    const leagueParam = league ?? ICompetitionCode.BL1 ;

    const dateParam = date ?? IDateOption.today

    const response = await fetch(`${BASE}/${links(leagueParam, dateParam)}`, BASE_PARAMETERS);

    return await response.json()

}
export const getMatch = async (id: string) => {
    const response = await fetch(`${BASE}/matches/${id}`)

    return await response.json()
}

import dayjs from "dayjs";

const BASE = 'https://api.football-data.org/v4'
const currentDate = dayjs().format('YYYY-MM-DD');
const yesterday = dayjs().subtract(1, 'day');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');

const BASE_PARAMETERS =  {
    method: "GET",
    headers: { "X-Auth-Token": "941f80a314174aac9e8b905617d11054" },
}


const links: Record<string, string> = {

    today: `competitions/${2021}/matches?dateFrom=${currentDate}&dateTo=${currentDate}`,
    yesterday: `competitions/${2021}/matches?dateFrom=${yesterday}&dateTo=${yesterday}`

} 

export const getData = async (path: string) => {

    const response = await fetch(`${BASE}/${links[path]}`, BASE_PARAMETERS);

    return await response.json()

}

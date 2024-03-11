import figlet from "figlet";
import { getFixtures, getMatch } from "./api";
import { getPath } from "./formatters";


const parameters = {
    headers: {
        'Content-Type': 'application/json',
    }
}

Bun.serve({
    port: 3000,
    async fetch(req) {

        let data;

        const { league, date, matchId } = getPath(req.url);

        if(matchId) {
            data = await getMatch(matchId)
        } else {
            data = await getFixtures(league, date);
        }

        

        return new Response(JSON.stringify(data), parameters);
    },
});

console.log(figlet.textSync(`Bun running!`));

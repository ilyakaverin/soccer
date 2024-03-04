import figlet from "figlet";
import { getData } from "./api";
import { getPath } from "./formatters";


const parameters = {
    headers: {
        'Content-Type': 'application/json',
    }
}

Bun.serve({
    port: 3000,
    async fetch(req) {


        const { league, date} = getPath(req.url);


        const data = await getData(league, date);

        return new Response(JSON.stringify(data), parameters);
    },
});

console.log(figlet.textSync(`Bun running!`));

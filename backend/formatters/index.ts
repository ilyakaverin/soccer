export const getPath = (url: string) => {
    const urlObject = new URL(url);

    const [,, league, date] = urlObject.pathname.split('/')

    console.log(league, date)

    return { league, date }
}

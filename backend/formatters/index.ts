export const getPath = (url: string) => {
    const urlObject = new URL(url);

    return urlObject.pathname.substring(5)
}

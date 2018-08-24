export default async (url) => {
    const data = await fetch(url);
    if (data.ok) {
        return data.json();
    }
    // if data != ok
    throw Error(data.statusText);
};

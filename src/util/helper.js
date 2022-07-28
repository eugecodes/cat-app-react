async function AsyncFetch(query_url){
    try {
        const response = await fetch(query_url);
        if (!response.ok) throw new Error(`Error! status: ${response.status}`)
        const result = await response.json();
        return result;
    } catch (err) {
        console.log(err);
    }
}
export default AsyncFetch
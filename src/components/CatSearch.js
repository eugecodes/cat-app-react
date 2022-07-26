import React from 'react';
import values from '../config.js';

function CatSearch(){
    const [results, setResults] = useState([])

    useEffect(() => {
        // term is the four initial letters of the cat breed
        let data = AsyncFetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${term}?api_key=${values.api_key}`)
        setResults(data)
    }, [])

    handleClick = () => {
        // Go to breed details
        console.log('click');
    }
    return (
        <>
            <div>{JSON.stringify(results)}</div>
            <p>Queries by breed name. 
            Clicking on a search result should lead to its detail page</p>
        </>
    )
}
export default CatSearch
import React, {useState, useEffect} from 'react';
import values from '../config.js';
import { useDispatch, useSelector } from 'react-redux'
import AsyncFetch from '../util/helper.js';
import Select from 'react-select';
import { useNavigate } from "react-router-dom";

function CatSearch({ initialData }){
    const [breedNames, setBreedNames] = useState([])
    //const breeds = useSelector(state => state.cat_breeds)
    //const dispatch = useDispatch();
    let navigate = useNavigate();

    useEffect(() => {
        let breednames = []
        if (initialData) {
            initialData.map((item) => {
                breednames.push({
                    'value': item.id,
                    'label': item.name
                })
            })
            setBreedNames(breednames)
        }
    }, [initialData])

    const handleClick = (actionMeta) => {
        if (['menu-close', 'input-blur'].includes(actionMeta.action) && actionMeta.prevInputValue){
            let data = AsyncFetch(`https://api.thecatapi.com/v1/breeds/search?q=${actionMeta.prevInputValue}&api_key=${values.api_key}`)
            data.then(data => {
                console.log(data) 
                navigate(`/details/${data[0].id}`)
            })
        }
    }
    const handleGo = (value) => {
        console.log(value)
        navigate(`/details/${value.value}`)
    }
    //useDispatch({ type: 'SET_CAT_LIST', payload: results })
    return (<Select options={breedNames} onChange={handleGo} onInputChange={handleClick} placeholder="Search..." className="input-large"></Select>)
}
export default CatSearch
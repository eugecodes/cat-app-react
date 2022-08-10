import React, { useState, useEffect } from 'react';
import values from '../config.js';
import { useDispatch, useSelector } from 'react-redux'
import AsyncFetch from '../util/helper.js';
import Select from 'react-select';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

function CatSearch({ initialData }) {
    const [breedNames, setBreedNames] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
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

    const handleClick = (value, actionMeta) => {
        setSearchTerm('')
        if (['menu-close', 'input-blur'].includes(actionMeta.action) && actionMeta.prevInputValue) {
            setSearchTerm({ 'value': 'none', 'label': actionMeta.prevInputValue })
            let data = AsyncFetch(`https://api.thecatapi.com/v1/breeds/search?q=${actionMeta.prevInputValue}&api_key=${values.api_key}`)
            data.then(data => {
                try {
                    console.log(`/details/${data[0].id}`)
                    navigate(`/details/${data[0].id}`)
                } catch (e) {
                    console.log(e)
                    new Swal({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Not cat breed was found with the written initials.'
                    })
                }

            })
        }
    }
    const handleGo = (value) => {
        console.log(value.value)
        navigate(`/details/${value.value}`)
    }
    //useDispatch({ type: 'SET_CAT_LIST', payload: results })
    return (<Select options={breedNames} onChange={handleGo} onInputChange={handleClick} value={searchTerm ? searchTerm : ''} placeholder="Search..." className="input-large"></Select>)
}
export default CatSearch
import React, { useContext, useEffect, useState } from 'react';
import { DarkModeContext } from './context/DarkModeContext';
import LightSwitch from './components/LightSwitch';
import classnames from 'classnames';
import { NavLink, Routes, Route } from "react-router-dom";
import CatBreedDetail from './components/CatBreedDetail';
import SlugBreed from './components/SlugBreed';
import CatList from './components/CatList';
import { Nav, Navbar, Form, NavDropdown, Container, Row, Col } from "react-bootstrap";
import { faCoffee, faFishFins } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from 'react-redux'
import CatSearch from './components/CatSearch';
import values from './config.js';
import AsyncFetch from './util/helper.js';
import { useNavigate } from "react-router-dom";

function Main() {
    const theme = ['light', 'dark']
    const darkMode = useContext(DarkModeContext)
    const [results, setResults] = useState()
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate();

    const loadInitialData = () => {
        let data = AsyncFetch(`https://api.thecatapi.com/v1/breeds?limit=10000&api_key=${values.api_key}`)
        data.then(data => {
            setResults(data)
            dispatch({ type: 'SET_CAT_BREEDS', payload: data })
        })
    }

    useEffect(() => {
        loadInitialData();
    }, [])

    return (
        <div width="100%" height="150%" className={`container-${theme[darkMode.darkMode === true ? 1 : 0]}`} style={{overflow: 'visible'}}>
            <Navbar bg={theme[darkMode.darkMode === true ? 1 : 0]} variant={theme[darkMode.darkMode === true ? 1 : 0]} className={`customshadow`} expand="lg" fixed="top">
                <NavLink className="navbar-brand" to={'/'}>
                    <img src={'/logo.png'} alt={"CatApp Logo"} width="60" height="60"></img>
                </NavLink>
                <LightSwitch />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown className={'mr-auto'} title="Breeds" id="basic-nav-dropdown">
                            {results && 
                            results.map((item) => {
                                return(
                                    <NavDropdown.Item href={`/details/${item.id}`}>{item.name}</NavDropdown.Item>
                                )
                            })}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CatSearch className="input-large" initialData={results} />
            </Navbar>
            <div className='body-container'>
                <Routes>
                    <Route path="/catbreed" exact={true} element={<SlugBreed />} />
                    <Route path="/details/:id" exact={true} element={<CatBreedDetail initialData={results} />} />
                    <Route path="/" exact={true} element={<CatList />} />
                </Routes>
            </div>
            <Navbar>
                <p></p>
            </Navbar>
        </div>
    )
}
export default Main
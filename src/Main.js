import React, { useContext } from 'react';
import { DarkModeContext } from './context/DarkModeContext';
import LightSwitch from './components/LightSwitch';
import classnames from 'classnames';
import { NavLink, Routes, Route } from "react-router-dom";
import CatBreedDetail from './components/CatBreedDetail';
import SlugBreed from './components/SlugBreed';
import CatList from './components/CatList';
import { Nav, Navbar, Form, Button, Container, Row, Col } from "react-bootstrap";
import { faCoffee, faFishFins } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from 'react-redux'

function Main() {
    const theme = ['light', 'dark']
    const darkMode = useContext(DarkModeContext)

    return (
        <Container>
            <Row>
                <Col>
                    <Navbar bg={theme[darkMode.darkMode === true ? 1 : 0]} expand="lg" fixed="top">
                        <NavLink className="navbar-brand" to={'/'}>
                            <img src={'./logo.png'} alt={"CatApp Logo"} width="60" height="60"></img>
                        </NavLink>
                        <div className={classnames('container-' + theme[darkMode.darkMode === true ? 1 : 0])}>
                            <LightSwitch />
                        </div>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <NavLink
                                    className="nav-link"
                                    to={`/details`}>
                                    <FontAwesomeIcon icon={faCoffee} /> Details
                                </NavLink>
                            </Nav>
                            <Nav className="mr-auto">
                                <NavLink
                                    className="nav-link"
                                    to={`/details`}>
                                    <FontAwesomeIcon icon={faFishFins} /> Breed Slug
                                </NavLink>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Routes>
                        <Route path="/catbreed" exact={true} element={<SlugBreed />} />
                        <Route path="/details" exact={true} element={<CatBreedDetail />} />
                        <Route path="/" exact={true} element={<CatList />} />
                    </Routes>
                </Col>
            </Row>
        </Container>
    )
}
export default Main
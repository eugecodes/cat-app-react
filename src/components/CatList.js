import React, { useState, useEffect, useContext } from 'react';
import values from '../config.js';
import AsyncFetch from '../util/helper.js';
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux'
import { DarkModeContext } from '../context/DarkModeContext';
import { useNavigate } from "react-router-dom";

function CatList() {
    const [results, setResults] = useState([])
    const [loadCount, setLoadCount] = useState(0)
    const darkMode = useContext(DarkModeContext)
    const theme = ['light', 'dark']
    const navigate = useNavigate();
    //const cat_list = useSelector(state => state.cat_list)
    //<p>name and image of 5 breeds picked randomly</p>
    useEffect(() => {
        setLoadCount(loadCount+1)
        // fetch 5 breeds with name and image
        let data = AsyncFetch(`https://api.thecatapi.com/v1/breeds?limit=5&api_key=${values.api_key}`)
        data.then(data => {
            setResults(data)
        })
    }, [])


    return (<Row>
                {results.map((item) => {
                    return (
                        <Col key={item.name}>
                        <Card style={{ width: `200px`, maxHeight: `800px`, color: `#333` }}>
                            <Card.Img variant="top" src={item.image.url} />
                            <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text className="cats-description">
                                {item.description}
                            </Card.Text>
                            <Button variant="primary" onClick={() => navigate(`/details/${item.id}`)}>Go to details</Button>
                            </Card.Body>
                        </Card>
                        </Col>
                    )
                })}
    </Row>)
}
export default CatList
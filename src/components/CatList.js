import React, { useState, useEffect } from 'react';
import values from '../config.js';
import AsyncFetch from '../util/helper.js';
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux'

function CatList() {
    const [results, setResults] = useState([])
    const cat_list = useSelector(state => state.cat_list)
    //<p>name and image of 5 breeds picked randomly</p>
    useEffect(() => {
        // fetch 5 breeds with name and image
        let data = AsyncFetch(`https://api.thecatapi.com/v1/images/search?limit=5&api_key=${values.api_key}`)
        data.then(data => {
            setResults(data)
        })
        // useDispatch({ type: 'SET_CAT_LIST', payload: results })
    }, [])

    return (
        <Container>
            <Row>
                <Col>{JSON.stringify(results)}</Col>
            </Row>
            <Row>
                {cat_list.map((item) => {
                    <Card style={{ width: `${item.width}px`, height: `${item.height}px` }}>
                        <Card.Img variant="top" src={item.url} />
                        <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">{item.id}</Button>
                        </Card.Body>
                    </Card>
                })}
            </Row>
        </Container>
    )
}
export default CatList
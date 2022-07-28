import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col, Card, Image } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function CatBreedDetail({ initialData }){
    const breeds = useSelector(state => state.cat_breeds)
    const list = useSelector(state => state.cat_list)
    const [details, setDetails] = useState([])
    let { id } = useParams();

    useEffect(() => {
        console.log(initialData)
        if(initialData) 
            setDetails(initialData.filter(item => item.id === id))
        else
            console.log('---u')
    }, [initialData])

    const StarsCard = (key, item) => {
        let stars = []
        for(let i=1; i<=item; i++){
            stars.push(<FontAwesomeIcon icon={faStar} />)
        }
        return(
            <Card>
                <Card.Text>** {key}</Card.Text>
                <Card.Text>{stars.join()}</Card.Text>
            </Card>
        ) 
    }

    return (
        <Container>
            {details && details[0] &&
            <Row>
                <Col>
                    <Image rounded src={details[0].image.url} style={{maxHeight: '30vw'}} />
                </Col>
                <Col>
                    <Card style={{ width: '90%', fontSize: '12px', color: '#333' }}>
                        <Card.Body>
                            <Card.Title>{details[0].name}</Card.Title>
                            <Card.Text>{details[0].description}</Card.Text>
                            <Card.Text><b>Temperament:</b> {details[0].temperament}</Card.Text>
                            {Object.keys(details[0]).map((key, index) =>{
                                if(isNaN(details[0][key])==false && details[0][key] > 0){
                                    let stars = []
                                    for(let i=1; i<=details[0][key]; i++){
                                        stars.push(<FontAwesomeIcon icon={faStar} style={{color: 'blue'}} />)
                                    }
                                    return(
                                            <Card.Text>
                                                <b>{key}: </b>
                                                {stars.map(card => { return card })}
                                            </Card.Text>
                                    )
                                }
                            })}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            }
        </Container>
    )
}
export default CatBreedDetail
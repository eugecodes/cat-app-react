import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col, Card, Image } from "react-bootstrap";
import { useParams } from "react-router";
// import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import values from "../config.js";

function Detail({ initialData }) {
  // const categories = useSelector((state) => state.categories);
  // const list = useSelector((state) => state.movies);
  const [details, setDetails] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    console.log(initialData.filter((item) => item.id == id));
    if (initialData) setDetails(initialData.filter((item) => item.id == id));
  }, []); // initialData, id

  return (
    <Container>
      {details && details[0] && (
        <Row>
          <Col>
            <Image
              rounded
              src={`${values.img_url}${details[0].poster_path}`}
              style={{ maxHeight: "30vw" }}
            />
          </Col>
          <Col>
            <Card style={{ width: "90%", fontSize: "12px", color: "#333" }}>
              <Card.Body>
                <Card.Title>{details[0].original_title}</Card.Title>
                <Card.Text>{details[0].overview}</Card.Text>
                {/* <Card.Text>
                  <b>Temperament:</b> {details.original_title}
                </Card.Text>
                {Object.keys(details[0]).map((key, index) => {
                  if (isNaN(details[0][key]) == false && details[0][key] > 0) {
                    let stars = [];
                    for (let i = 1; i <= details[0][key]; i++) {
                      stars.push(
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "blue" }}
                        />
                      );
                    }
                    return (
                      <Card.Text>
                        <b>{key}: </b>
                        {stars.map((card) => {
                          return card;
                        })}
                      </Card.Text>
                    );
                  }
                })} */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
}
export default Detail;

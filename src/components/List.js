import React, { useState, useEffect, useContext } from "react";
import values from "../config.js";
import AsyncFetch from "../util/helper.js";
import { Card, Row, Col, Button } from "react-bootstrap";
import { DarkModeContext } from "../context/DarkModeContext";
import { useNavigate } from "react-router-dom";

function List() {
  const [results, setResults] = useState([]);
  const [loadCount, setLoadCount] = useState(0);
  const darkMode = useContext(DarkModeContext);
  const theme = ["light", "dark"];
  const navigate = useNavigate();
  //const movies = useSelector(state => state.movies)
  //<p>name and image of 5 breeds picked randomly</p>
  useEffect(() => {
    setLoadCount(loadCount + 1);
    // fetch 5 breeds with name and image
    let data = AsyncFetch(
      `${values.base_url}/${values.api_version}/movie/popular?api_key=${values.api_key}&page=1`
    );
    data.then((data) => {
      setResults(data.results);
    });
  }, []);

  return (
    <Row>
      {results.map((item) => {
        return (
          <Col key={item.original_title}>
            <Card
              key={item.id}
              style={{ width: `200px`, maxHeight: `800px`, color: `#333` }}
            >
              <Card.Img
                variant="top"
                src={`${values.img_url}${item.poster_path}`}
              />
              <Card.Body>
                <Card.Title>{item.original_title}</Card.Title>
                <Card.Text className="cats-description">
                  {item.overview}
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => navigate(`/details/${item.id}`)}
                >
                  Go to details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}
export default List;

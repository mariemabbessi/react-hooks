import React from "react";
import { Card } from "react-bootstrap";
import Star from "../starComponent/Star";
import { Link } from "react-router-dom";

function MovieCard({ movie: { image, rating, name, date, description, id } }) {
  return (
    <div>
      <Link to={`/description/${id}`}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>
              {name} {date}
            </Card.Title>
            <Card.Text>{description}</Card.Text>
            <div style={{ display: "flex" }}>
              <Star rating={rating} />
            </div>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default MovieCard;

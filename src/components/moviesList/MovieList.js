import React, { useState } from "react";
import MovieCard from "../movieCard/MovieCard";
import { Modal, Button, Form } from "react-bootstrap";

function MovieList(props) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [trailer, setTrailer] = useState("");
  const [rating, setRating] = useState(null);
  const [description, setDescription] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addNewMovie = () => {
    props.setmyMovie([
      ...props.myMovies,
      {
        id: Math.random(),
        name,
        date,
        image,
        trailer,
        rating,
        description,
      },
    ]);
    setName("");
    setDate("");
    setImage("");
    setTrailer("");
    setRating(null);
    setDescription("");
    handleClose();
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      <div>
        <Button variant="primary" onClick={handleShow}>
          +
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a new movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the movie name"
                  onChange={(event) => setName(event.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the movie date"
                  onChange={(event) => setDate(event.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Image link</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the movie image link"
                  onChange={(event) => setImage(event.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Trailer link</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the movie trailer link"
                  onChange={(event) => setTrailer(event.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the movie rating"
                  onChange={(event) => setRating(Number(event.target.value))}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Movie description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </Form.Group>

              <Button variant="primary" onClick={addNewMovie}>
                Add new movie
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      {props.myMovies
        .filter(
          (el) =>
            el.name
              .toLowerCase()
              .includes(props.inputSearch.toLowerCase().trim()) &&
            el.rating >= props.starSearch
        )
        .map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    </div>
  );
}

export default MovieList;

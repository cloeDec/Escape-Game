import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import React from "react";


const Cards = ({ escapes }) => {


  return (
    <>
    <div className="card">
      <Card>
        <Link to={`/escapesdetails/`+escapes.id_escape} state={escapes}>
          <Card>
            <Card.Body>
              <Card.Title className="title_card">{escapes.nom_escapes}</Card.Title>
              <Card.Img className="image" variant="top" src={escapes.url} />
            </Card.Body>
          </Card>
        </Link>
      </Card></div>
    </>
  );
};

export default Cards;

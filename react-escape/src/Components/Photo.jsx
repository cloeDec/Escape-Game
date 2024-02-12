import Card from "react-bootstrap/Card";
import React from "react";

const Cards = ({ photo }) => {
  return (
    <>
      <div className="card">
          <Card>
            <Card.Body>
              <Card.Img className="image" src={photo.url} />
            </Card.Body>
          </Card>
      </div>
    </>
  );
};

export default Cards;

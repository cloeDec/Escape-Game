import Card from "react-bootstrap/Card";
import React from "react";

const Cards = ({ avis }) => {



  return (
    <>
      <div className="card-avis">
        <Card.Title className="title_card">{avis.nom_uti}</Card.Title>
        <Card.Title className="note_card">Note : {avis.note} /10</Card.Title>
        <Card.Text className="text_card" variant="top">
          {" "}
          {avis.avis}
        </Card.Text>
      </div>


    </>
  );
};

export default Cards;

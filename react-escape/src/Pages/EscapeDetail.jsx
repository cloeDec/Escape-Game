import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import CardEscape from "../Components/CardsEscape";
import CardDom from "../Components/CardsDom";
import Escapes from "../Services/escapesService";
import "..//EscapeDetail.css";

const EscapeDetail = () => {
  const { id } = useParams();

  const [escp, setEscp] = useState([]);

  const fetchEscapesCard = async () => {
    try {
      Escapes.fetchEscapesCard().then((response) => {
        setEscp(response.data);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const [escpdom, setEscpdom] = useState([]);

  const fetchEscapesCardDom = async () => {
    try {
      await Escapes.fetchEscapesCardDom().then((response) => {
        setEscpdom(response.data);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const [escpdetail, setEscpdetail] = useState([]);

  const fetchEscapesById = async () => {
    try {
      Escapes.fetchEscapesById(id).then((response) => {
        console.log(response);
        setEscpdetail(response.data);
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchEscapesCard();
    fetchEscapesCardDom();
    fetchEscapesById();
  }, []);

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <body>
      <div className="escape_detail">
        <h1>L'univers des escapes games</h1>
        <div className="detail">
          <img src={escpdetail.url} />
          <div>
            <h3>{escpdetail.nom_escapes}</h3>
            <p>
              <h4 className="info_escape">Synopsis : </h4> {escpdetail.synopsis}
              <h4 className="info_escape">Objectif Final : </h4>
              {escpdetail.objectif}
              <h4 className="info_escape">Tarifs : </h4>
              {escpdetail.tarif} €<h4 className="info_escape">Durée : </h4>
              {escpdetail.temps} min
              <h4 className="info_escape">Difficulté : </h4>
              {escpdetail.difficulte}
            </p>
          </div>
          <Link to={`/reservation/`}>
            <button className="reservation">Réservation</button>
          </Link>
        </div>

        <div className="block_card">
          <div className="titre">
            <h3>Escape Game</h3>
            <h4>Sur place</h4>
          </div>{" "}
          <div className="escape-container" onClick={refreshPage}>
            {escp.map((e) => {
              return <CardEscape key={escp.id_escape} escapes={e} />;
            })}
          </div>
          <h4>Domicile</h4>
          <div className="escape-container" onClick={refreshPage}>
            {escpdom.map((e) => {
              return <CardDom key={escpdom.id_escape} escapesdom={e} />;
            })}
          </div>
        </div>
      </div>{" "}
    </body>
  );
};

export default EscapeDetail;

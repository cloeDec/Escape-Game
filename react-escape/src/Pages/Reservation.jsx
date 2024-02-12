import React, { useState} from "react";
import "../Connexion.css";
import ResaDom from "../Components/ResaDom";
import ResaPlace from "../Components/ResaPlace";

const Reservation = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="body">
        <div
          className={isActive ? "container active" : "container"}
          id="container"
        >
          {/* <!-- Formulaire d'inscription --> */}
          <ResaDom />
          {/* <!-- Formulaire de connexion --> */}
          <ResaPlace />
          {/* <!-- Conteneur pour basculer entre les formulaires --> */}
          <div className="toggle-container">
            <div className="toggle">
              {/* <!-- Panneau pour le formulaire de connexion --> */}
              <div className="toggle-panel toggle-left">
                <h1 className="titre-form">Sur site</h1>
                <p>Pour vos réservations sur site remplissez le formulaire</p>
                <button
                  className="hidden"
                  id="login"
                  onClick={() => {
                    setIsActive(false);
                  }}
                >
                  Formulaire
                </button>
              </div>
              {/* <!-- Panneau pour le formulaire d'inscription --> */}
              <div className="toggle-panel toggle-right">
                <h1 className="titre-form">Domicile</h1>
                <p>Pour vos réservations à domicile remplissez le formulaire</p>
                <button
                  className="hidden"
                  id="register"
                  onClick={() => {
                    setIsActive(true);
                  }}
                >
                  Formulaire
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservation;

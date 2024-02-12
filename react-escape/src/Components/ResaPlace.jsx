import React, { useState, useContext, useEffect } from "react";
import reservationService from "../Services/reservationService";
import AuthContext from "./AuthContext";
import escapesService from "../Services/escapesService";

const ResaPlace = () => {
  const { user } = useContext(AuthContext);
  const [escapeNom, setEscapeNom] = useState([]);
  const [resaPlace, setResaPlace] = useState({
    id_uti: user.id_uti,
    id_escape: "",
    creneau: "",
    isDomicile: false,
    Nb_participant: 2, // Mettez la valeur par défaut pour le nombre de participants à domicile
  });

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setResaPlace({ ...resaPlace, [name]: value });
  };

  const handleDateTimeChange = (event) => {
    const selectedDate = new Date(event.target.value);
    const disallowedHours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 23]; // Heures de minuit à 9h et de 12h à 14h

    if (disallowedHours.includes(selectedDate.getHours())) {
      // Si l'heure sélectionnée est dans la liste des heures non autorisées, annuler la sélection
      event.target.value = ""; // Effacer la valeur de l'input
      if (selectedDate.getHours() === 11 || selectedDate.getHours() === 23) {
        alert("Délais insuffisant pour une partie."); // Alert pour les heures 11h et 23h
      } else {
        alert("Les horaires d'ouverture sont de 9h - 12h et 14h - Minuit."); // Autres heures non autorisées
      }
    }
    setResaPlace({ ...resaPlace, creneau: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Si l'heure est valide, envoyer les données au serveur
    reservationService
      .addReservation(resaPlace)
      .then((response) => {
        console.log("Réponse du serveur :", response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi au serveur :", error);
      });
    setResaPlace({
      id_uti: user.id_uti,
      id_escape: "",
      creneau: "",
      isDomicile: false,
      Nb_participant: 2, // Mettez la valeur par défaut pour le nombre de participants à domicile
    });
  };
  const fetchEscapeNom = async () => {
    try {
      escapesService.fetchEscapeNames().then((response) => {
        setEscapeNom(response.data);
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchEscapeNom();
  }, []);
  return (
    <>
      <div className="form-container sign-in">
        <form>
          <h1>Sur Place</h1>
          <select
            name="id_escape"
            value={resaPlace.id_escape}
            onChange={handleChange}
            required
          >
            <option value="">Choisir un escape game</option>
            {escapeNom.map((escapeGame) => (
              <option key={escapeGame.id_escape} value={escapeGame.id_escape}>
                {escapeGame.nom_escapes}
              </option>
            ))}
          </select>
          <input
            type="datetime-local"
            onChange={handleDateTimeChange}
            value={resaPlace.creneau}
            required
          />
          <input
            type="number"
            placeholder="Nombre de participants"
            name="Nb_participant"
            value={resaPlace.Nb_participant}
            onChange={handleChange}
            min={2}
            max={8}
            required
          />

          <p>Minimum 2 personnes et maximum 8 personnes</p>

          <button onClick={handleSubmit}>Envoyer</button>
        </form>
      </div>
    </>
  );
};

export default ResaPlace;

import React, { useEffect, useState, useContext } from "react";
import Photo from "../Components/Photo";
import Galerie from "../Services/galerieService";
import Avis from "../Components/Avis";
import Commentaire from "../Services/commentairesService";
import AuthContext from "../Components/AuthContext";
import "../Galerie.css";
import escapesService from "../Services/escapesService";
import { toast } from "react-toastify";

const GaleriePhoto = () => {
  const { user } = useContext(AuthContext);
  const [photo, setPhoto] = useState([]);
  const [escapeNom, setEscapeNom] = useState([]);
  const [avis, setAvis] = useState([]);
  const [ajoutAvis, setAjoutAvis] = useState({
    id_escape: "",
    note: 10,
    avis: "",
    id_uti: user.id_uti
  });
  const fetchGalerie = async () => {
    try {
      Galerie.fetchGalerie().then((response) => {
        console.log(response);
        setPhoto(response.data);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const fetchCommentaire = async () => {
    try {
      Commentaire.fetchCommentaires().then((response) => {
        console.log(response);
        setAvis(response.data);
      });
    } catch (e) {
      console.log(e);
    }
  };
  const fetchEscapeNom = async () => {
    try {
      escapesService.fetchEscapes().then((response) => {
        setEscapeNom(response.data);
      });
    } catch (e) {
      console.log(e);
    }
  };

  // Ajout commentaire

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setAjoutAvis({ ...ajoutAvis, [name]: value });
  };
  const handleAdd = (event) => {
    try {
      event.preventDefault();
      Commentaire.addCommentaires(ajoutAvis)
      .then((res)=>{
          toast.success("Votre message a été envoyé");
          setAjoutAvis({
            id_escape: "",
            note: 10,
            avis: "",
            id_uti: user.id_uti
          }) 
      })
      .catch((err)=>toast.error('Erreur : votre message n\'a pas pu être envoyé'));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchGalerie();
    fetchCommentaire();
    fetchEscapeNom();
  }, []);

  return (
    <body>
      <div className="galerie">
        <h1>L'univers des escapes games</h1>

        <div className="avis">
          {avis.map((e) => {
            return <Avis key={avis.id_uti} avis={e} />;
          })}
        </div>

        <div className="block_card">
          <div className="titre">
            <h3>Galerie Photo</h3>
          </div>
          <div className="escape-container">
            {photo.map((e) => {
              return <Photo key={photo.id_galerie} photo={e} />;
            })}
          </div>
        </div>

        <form>
          <h1>Nouveau Commentaire</h1>
          {/* <!-- Champs pour faire un nouveau commentaire --> */}
          <select
            name="id_escape"
            value={ajoutAvis.id_escape}
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
            type="number"
            name="note"
            min="0"
            max="10"
            step="1"
            placeholder="Note"
            value={ajoutAvis.note}
            onChange={handleChange}
            required
          />
          <textarea
            className="avis-text"
            rows="5"
            cols="2"
            name="avis"
            placeholder="Avis"
            value={ajoutAvis.avis}
            onChange={handleChange}
            required
          ></textarea>

          <button onClick={(event) =>{handleAdd(event)}}>Envoyer</button>
        </form>
      </div>
    </body>
  );
};

export default GaleriePhoto;

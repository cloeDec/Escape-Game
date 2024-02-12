import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../Components/AuthContext";
import utilisateurService from "../Services/utilisateurService";
import reservationService from "../Services/reservationService";
import Auth from "../Services/Auth";
import "../Profil.css";

const Profil = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState({});
  const Auth0 = new Auth();

  const fetchUtilisateurById = () => {
    try {
      utilisateurService.fetchUtilisateurById(user.id_uti).then((response) => {
        setUsers(response.data);
        console.log(response.data);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const fetchResa = () => {
    try {
      reservationService.fetchResa(user.id_uti).then((response) => {
        setUsers(response.data);
        console.log(response.data);
      });
    } catch (e) {
      console.log(e);
    }

    useEffect(() => {
      fetchUtilisateurById(), 
      fetchResa();
    }, []);

    console.log(user);
    return (
      <>
        <div className="profil">
          <div className="detail_profil">
            <h4>Nom : </h4> {user.nom_uti}
            <h4>Prénom : </h4>
            {user.prenom_uti}
            <h4>Email : </h4>
            {user.mail_uti}
            <h4>Adresse : </h4>
            {user.adresse}
            <h4>Téléphone : </h4>
            {user.numero_tel}
            {user.creneau};{user.domicile};{user.nb_participantr};
          </div>
        </div>
      </>
    );
  };
};
export default Profil;

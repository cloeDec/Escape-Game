import Logo from "../Assets/logo_escape.png";
import { React, useState, useContext } from "react";
import { Link } from "react-router-dom";
import LogoFcb from "../Assets/icons8-logo-facebook-50.png";
import LogoInsta from "../Assets/icons8-logo-instagram-50.png";
import MenuBurger from "../Assets/icons8-menu-64.png";
import AuthContext from "../Components/AuthContext";
import Auth from "../Services/Auth";
import { toast } from "react-toastify";

function NavBar() {
  const Auth0 = new Auth();
  const [isActive, setIsActive] = useState(false);
  const { isAuthenticated, setIsAuthenticated, user } = useContext(AuthContext);
  const handleDeco = async () => {
    try {
      setIsAuthenticated(false); 
      Auth0.logout();
      toast.error(
          user.prenom_uti +
          "s'est déconnecté"
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="navbar">
        <img
          src={MenuBurger}
          alt="menu burger"
          className="menu_burger"
          onClick={() => {
            setIsActive(!isActive);
          }}
        />
        <div className={isActive ? "nav-links active" : "nav-links"}>
          <img
            src={MenuBurger}
            alt="menu burger"
            className="menu_burger"
            id="menu_burger2"
            onClick={() => {
              setIsActive(!isActive);
            }}

          />
          <Link to={"/"}>
            <img
              src={Logo}
              id="logo"
              width={"120px"}
              alt="Logo"
              placeholder="Logo_escape_game"
            /></Link>
          {isAuthenticated === false ? <>
            <Link to={"/connexion"}>
              <button className="lien_nav">Connexion</button>
            </Link>
          </> :
            <button className="lien_nav" onClick={handleDeco}>Déconnexion</button>
          
          }
          {isAuthenticated === false? <></>:
          <Link to={"/profil"}>
            <button className="lien_nav">Profil</button>
          </Link>
          }
          
          <hr />
          <Link to={"/"}>
            <button className="lien_nav">Acceuil</button>
          </Link>
          <Link to={"/galerie"}> 
            <button className="lien_nav">Galerie</button>
          </Link>
          <Link to={"/minijeux"}>
            <button className="lien_nav">Mini-jeux</button>
          </Link>
          <Link to={"/reservation"}>
            <button className="lien_nav">Réservation</button>
          </Link>
          <Link to={"/contact"}>
            <button className="lien_nav">Contact</button>
          </Link>
          <div className="icon-reseau">
            <Link to={"https://www.facebook.com"} target="_blank">
              <img
                className="icon"
                src={LogoFcb}
                id="logo_fcb"
                width={"40px"}
                alt="Lien Facebook"
                placeholder="Logo-facebook"
              />
            </Link>
            <Link to={"https://www.instagram.com"} target="_blank">
              <img
                className="icon"
                src={LogoInsta}
                id="logo_insta"
                width={"40px"}
                alt="Lien Instagram"
                placeholder="Logo-instagram"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;

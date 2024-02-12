import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./Components/Navbar";
import Connexion from './Pages/Connexion';
import Reservation from './Pages/Reservation';
import Contact from './Pages/Contact';
import Galerie from './Pages/Galerie';
import MiniJeux from './Pages/MiniJeux';
import HomePage from "./Pages/HomePage";
import AuthContext from "./Components/AuthContext";
import Auth from "./Services/Auth";
import EscapeDetail from "./Pages/EscapeDetail";
import Profil from "./Pages/Profil";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Auth0 = new Auth();
Auth0.setup();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    Auth0.isAuthenticated() 
  );
  const [user, setUser] = useState(Auth0.getUser());

  return (
    <div className="App">
      <AuthContext.Provider
        value={{isAuthenticated, setIsAuthenticated, user, setUser}}>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/connexion'} element={<Connexion />} />
          <Route path={'/escapesdetails/:id'} element={<EscapeDetail />} />
            <Route path={"/profil"} element={<Profil />} />
          <Route path={'/galerie'} element={<Galerie />} /> 
          <Route path={'/minijeux'} element={<MiniJeux />} /> 
          <Route path={'/reservation'} element={<Reservation />} />
          <Route path={'/contact'} element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
    </AuthContext.Provider>

    </div>
  );
}

export default App;

import axios from "axios";

function fetchGalerie() {
    return axios.get("http://127.0.0.1:3000/galerie");
  };
  

export default { 
    fetchGalerie
};
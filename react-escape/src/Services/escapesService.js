import axios from "axios";

function fetchEscapes() {
  return axios.get("http://127.0.0.1:3000/escapes");
}

function fetchEscapesCard() {
  return axios.get("http://127.0.0.1:3000/escapes/card");
}

function fetchEscapesCardDom() {
  return axios.get("http://127.0.0.1:3000/escapes/carddom");
}

function fetchEscapesById(id_escape) {
  return axios.get(`http://127.0.0.1:3000/escapes/escapesdetails/` + id_escape);
}

  function fetchEscapeNames() {
      return axios.get("http://127.0.0.1:3000/escapes/names");
    }
  function fetchEscapeNamesDom() {
      return axios.get("http://127.0.0.1:3000/escapes/namesdom");
    }

export default { 
    fetchEscapes, 
    fetchEscapesCard,
    fetchEscapesCardDom,
    fetchEscapesById,
    fetchEscapeNames,
    fetchEscapeNamesDom

};

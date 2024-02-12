import axios from 'axios';

function fetchHistorique() {
    return axios.get('http://127.0.0.1:3000/historique');
}

export default fetchHistorique;
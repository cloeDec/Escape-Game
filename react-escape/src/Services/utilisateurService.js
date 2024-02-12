import axios from 'axios';

function fetchUtilisateurById(user) {
    return axios.get('http://127.0.0.1:3000/utilisateur/' + user); 
}

function addUtilisateur(utilisateur){
    return axios.post("http://127.0.0.1:3000/utilisateur", utilisateur, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

function loginUtilisateur(utilisateur) {
    return axios.post("http://127.0.0.1:3000/connexion", utilisateur);
    
}

export default {
    fetchUtilisateurById, 
    addUtilisateur,
    loginUtilisateur
 };
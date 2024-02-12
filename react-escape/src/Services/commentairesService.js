import axios from 'axios';

function fetchCommentaires() {
    return axios.get('http://127.0.0.1:3000/commentaire');
}

function addCommentaires(user){
    return axios.post("http://127.0.0.1:3000/commentaire", user, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export default {fetchCommentaires, addCommentaires};
const conn = require("./database");

const fetchCommentaires = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT uti.id_uti, uti.nom_uti, comm.* FROM utilisateur AS uti  JOIN commentaires AS comm ON uti.id_uti = comm.id_uti GROUP BY uti.id_uti`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

const addCommentaire = (comm) => {
    return new Promise((resolve, reject) => {
        let sql = `INSERT INTO commentaires(avis, note, id_escape, id_uti) VALUES ("${comm.avis}", '${comm.note}', '${comm.id_escape}', '${comm.id_uti}')`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

module.exports = {fetchCommentaires, addCommentaire};
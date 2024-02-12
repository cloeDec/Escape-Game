const conn = require("./database");

const fetchUtilisateurById = (user) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM utilisateur WHERE utilisateur.id_uti=`+ user;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}
const addUtilisateur = (utilisateur) => {
    return new Promise((resolve, reject) => {
        let sql = `INSERT INTO utilisateur(nom_uti, prenom_uti, mail_uti, passwords, adresse, numero_tel) VALUES ('${utilisateur.nom_uti}', '${utilisateur.prenom_uti}', '${utilisateur.mail_uti}', '${utilisateur.passwords}', '${utilisateur.adresse}', '${utilisateur.numero_tel}')`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

const connUtilisateur = (utilisateur) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM utilisateur WHERE mail_uti = '${utilisateur.mail_uti}' AND passwords = '${utilisateur.passwords}';`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

module.exports = {
    fetchUtilisateurById, 
    addUtilisateur,
    connUtilisateur
};
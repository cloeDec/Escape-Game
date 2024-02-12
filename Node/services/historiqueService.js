const conn = require("./database");

const fetchHistorique = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM historique;`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

module.exports = {fetchHistorique};
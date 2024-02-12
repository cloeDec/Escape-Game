const conn = require("./database");

const fetchGalerie = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM galerie`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

module.exports = {
    fetchGalerie
};
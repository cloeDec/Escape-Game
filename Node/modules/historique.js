const express = require("express");
const conn = require("../services/database");
const historiqueService = require("../services/historiqueService");
const router = express.Router();

/*Ce sont des routes pour des pages d'acceuil (de présentation) comme dans scolarité*/ 
router.get("/", (req, res) => {
    historiqueService.fetchHistorique().then(result => {
        res.status(200)
        res.json(result);
    }).catch(err => {
        console.error("Oops...", err);
        res.json({"message" : "Error" + err.sqlMessage})
    });
});


module.exports = router;
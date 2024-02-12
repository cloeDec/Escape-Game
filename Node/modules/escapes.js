const express = require("express");
const conn = require("../services/database");
const escapesService = require("../services/escapesService");
const router = express.Router();

/*Ce sont des routes pour des pages d'acceuil (de présentation) comme dans scolarité*/ 
router.get("/", (req, res) => {
    escapesService.fetchEscapes().then(result => {
        res.status(200)
        res.json(result);
    }).catch(err => {
        console.error("Oops...", err);
        res.json({"message" : "Error" + err.sqlMessage})
    });
});

router.get("/card", (req, res) => {
    escapesService.fetchEscapesCard().then(result => {
        res.status(200)
        res.json(result);
    }).catch(err => {
        console.error("Oops...", err);
        res.json({"message" : "Error" + err.sqlMessage})
    });
});

router.get("/carddom", (req, res) => {
    escapesService.fetchEscapesCardDom().then(result => {
        res.status(200)
        res.json(result);
    }).catch(err => {
        console.error("Oops...", err);
        res.json({"message" : "Error" + err.sqlMessage})
    });
});
router.get("/names", (req, res) => {
    escapesService.fetchEscapeNames().then(names => {
        res.status(200).json(names); // Renvoie les noms des escape games en tant que réponse JSON
    }).catch(err => {
        console.error("Oops...", err);
        res.status(500).json({"message": "Error" + err.sqlMessage}); // En cas d'erreur, renvoie un message d'erreur avec le statut HTTP 500
    });
});
router.get("/namesdom", (req, res) => {
    escapesService.fetchEscapeNamesDom().then(names => {
        res.status(200).json(names); // Renvoie les noms des escape games en tant que réponse JSON
    }).catch(err => {
        console.error("Oops...", err);
        res.status(500).json({"message": "Error" + err.sqlMessage}); // En cas d'erreur, renvoie un message d'erreur avec le statut HTTP 500
    });
});

router.get("/escapesdetails/:id_escape", (req, res) => {
    escapesService.fetchEscapesById(req.params.id_escape).then(result => {
        res.status(200)
        res.json(result[0]);
    }).catch(err => {
        console.error("Oops...", err);
        res.json({"message" : "Error" + err.sqlMessage})
    });
});


module.exports = router;
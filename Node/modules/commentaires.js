const express = require("express");
const conn = require("../services/database");
const commentairesService = require("../services/commentairesService");
const router = express.Router();

/*Ce sont des routes pour des pages d'acceuil (de présentation) comme dans scolarité*/ 
router.get("/", (req, res) => {
    commentairesService.fetchCommentaires().then(result => {
        res.status(200)
        res.json(result);
    }).catch(err => {
        console.error("Oops...", err);
        res.json({"message" : "Error" + err.sqlMessage})
    });
});

router.post('/', (req, res) => {
    let data = req.body;
        commentairesService.addCommentaire(data).then(result => {
        res.status(201)
        res.json(data)
    }).catch(err => {
        console.log(err)
        res.send({"message" : "Votre ajout ne s'est pas bien passé"})
    })
});

module.exports = router;
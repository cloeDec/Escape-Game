const express = require("express");
const utilisateurService = require("../services/utilisateurService");
const router = express.Router();

/*Ce sont des routes pour des pages d'acceuil (de présentation) comme dans scolarité*/ 
router.get("/:user", (req, res) => {
    const utilisateur = req.params.user;
    utilisateurService.fetchUtilisateurById(utilisateur).then(result => {
        res.status(200)
        res.json(result);
    }).catch(err => {
        console.error("Oops...", err);
        res.json({"message" : "Error" + err.sqlMessage})
    });
});

router.post("/", (req, res) => {
    let data = req.body;
    console.log(data);
    utilisateurService.addUtilisateur(data).then((result) => {
        res.status(201);
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.send({ message: "Votre ajout ne s'est pas bien passé" });
      });
  });


module.exports = router;
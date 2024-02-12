const express = require("express");
const reservationService = require("../services/reservationService");
const router = express.Router();

router.post("/", async (req, res) => {
  let data = req.body;
  let creneau = data.creneau.substring(0, 14);
  creneau = creneau.replace("T", " ");
  if (data.isDomicile == true) {
    const disponibilities = await reservationService.countDisponibilities(
      creneau,
      data.isDomicile
    );
    if (disponibilities[0].resa >= 2) {
        res.status(400).json({ message: 'Aucune disponibilité à cet horaire.' });
    } else {
      reservationService
        .addResa(data)
        .then((result) => {
          res.status(201).json(data); // Envoi de la réponse avec le statut 201 et les données ajoutées
        })
        .catch((err) => {
          console.log(err);
          res
            .status(500)
            .json({ message: "Votre ajout ne s'est pas bien passé" }); // En cas d'erreur, renvoyer un statut d'erreur 500
        });
    }
  } else {
    const disponibilities = await reservationService.countDisponibilitiesPlace(
      creneau,
      data.isDomicile,
      data.id_escape
    );
    console.log(disponibilities);
    if (disponibilities[0] && disponibilities[0].resa >= 1) {
        res.status(400).json({ message: 'Aucune disponibilité à cet horaire.' });
    } else {
      reservationService
        .addResa(data)
        .then((result) => {
          res.status(201).json(data); // Envoi de la réponse avec le statut 201 et les données ajoutées
        })
        .catch((err) => {
          console.log(err);
          res
            .status(500)
            .json({ message: "Votre ajout ne s'est pas bien passé" }); // En cas d'erreur, renvoyer un statut d'erreur 500
        });
    }
  }
})
  
router.get("/", (req, res) => {
  const utilisateur = req.params.user;
  reservationService.fetchResa(utilisateur).then(result => {
      res.status(200)
      res.json(result);
  }).catch(err => {
      console.error("Oops...", err);
      res.json({"message" : "Error" + err.sqlMessage})
  });
});

module.exports = router;


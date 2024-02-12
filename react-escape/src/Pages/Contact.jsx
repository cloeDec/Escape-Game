import React from "react";

import "../Contact.css";

const Contact = () => {
  return (
    <body>
      <div className="contact">
        <h1>L'univers des escapes games</h1>
        <div className="block-coordonne">
          <h1>Pour nous contacter</h1>
          <div className="coordonne">
            <ul>
              {" "}
              <li>Mail : tbialasik@fcdigital.fr </li>
              <li>Numéro : 0666666666</li>
              <li>Adresse : 46 Rue Faidherbe, Lille (59350) </li>
              <li>Horaire : 9H 12H – 14H 00H</li>
            </ul>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d632.620964791636!2d3.067734999999988!3d50.63670439999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d5899f0839c7%3A0xc63c622856e4abe!2s46%20Rue%20Faidherbe%2C%2059800%20Lille!5e0!3m2!1sfr!2sfr!4v1702464688030!5m2!1sfr!2sfr"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <form>
            <h1>Vous voulez nous envoyer un message ?</h1>
            {/* <!-- Champs pour envoyer un message --> */}
            <div className="contact-form">
              <input type="text" name="nom" placeholder="Nom" required />
              <input type="text" name="prenom" placeholder="Prénom" required />
              <input type="email" name="email" placeholder="Email" required />
              <input type="tel" name="tel" placeholder="Téléphone" required />
              <textarea
                rows="5"
                cols="8"
                name="avis"
                placeholder="Votre message"
                required
              ></textarea>

              <button>Envoyer</button>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
};

export default Contact;

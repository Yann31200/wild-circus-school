const express = require('express');
const app = express();
const connection = require('./conf');
const port = 4000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/wcs/student', (req, res) => {
  const formData = req.body;
  connection.query(`INSERT INTO student SET ?`, formData, err => {
    if (err) {
      res.status(500).send("Erreur à l'ajout d'un etudiant");
    } else {
      res.status(201).send('Etudiant ajouté');
    }
  });
});


app.listen(port, (err) => {
  if (err) {
    throw new Error('c est la merde...');
  }
  console.log(`Sever is listening on ${port}`);
});


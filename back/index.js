const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const connection = require('./conf');
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/wcs/student', (req, res) => {
  connection.query(`INSERT INTO student SET ?`, req.body, (err, results) => {
    if (err) {
      return res.status(500).send("Erreur à l'ajout d'un etudiant");
    }
    res.status(201).json({ message: 'created' });
    // res.status(201).send('Etudiant ajouté');
  })
});

app.listen(port, (err) => {
  if (err) {
    throw new Error('c est la merde...');
  }
  console.log(`Sever is listening on ${port}`);
});

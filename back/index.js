const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const connection = require('./conf');
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/wcs/students', (req, res) => {
  connection.query(`SELECT * FROM students`, (err, results) => {
    if (err) {
      console.log(err)
      return res.status(500).send("Erreur lecture de la liste");
    } else {
      res.json(results);
    }
  })
});
// get student + training correspondant

app.get('/wcs/students', (req, res) => {
  connection.query(`SELECT s.firstname, s.lastname, s.phone, s.mail, t.name FROM students AS s JOIN student_has_training AS st ON s.id = st.id_student JOIN training AS t ON t.id=st.id_training ORDER BY s.firstname`, (err, results) => {
    if (err) {
      console.log(err)
      return res.status(500).send("Erreur lecture de la liste");
    } else {
      res.json(results);
    }
  })
});

app.post('/wcs/students', (req, res) => {
  connection.query(`INSERT INTO students SET ?`, req.body, (err, results) => {
    if (err) {
      console.log(err)
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

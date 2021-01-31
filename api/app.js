const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

// place holder for the data
const notecontent = [];

app.use(bodyParser.json());

app.get('/api/getnote', (req, res) => {
  console.log('api/get note called!')
  res.json(notecontent);
});

app.post('/api/savenote', (req, res) => {
  const note_in = req.body.note;
  console.log('save note called: note: ', note_in);
  notecontent = note_in;
  res.send(true);
});

app.get('/', (req,res) => {
    res.send('App Works');
});

app.listen(port, () => {
    console.log(`Server listening on port#:${port}`);
});
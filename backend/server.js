const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 3001;

let currentString = 'Initial String';

app.use(bodyParser.json());

app.get('/getString', (req, res) => {
  res.json({ string: currentString });
});

app.post('/changeString', (req, res) => {
  const newString = req.body.newString;
  currentString = newString;
  res.json({ string: currentString });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 3001;

const returnString = 'Any String';

app.use(bodyParser.json());

app.get('/', (req, res) => {
  return res.json({ returnString });
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})

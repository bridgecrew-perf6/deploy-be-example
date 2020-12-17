require('dotenv').config();
const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.sendStatus(200)
})

app.get('/greet', (req, res) => {
  res.send(`hola ${process.env.NAME}`)
})

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
});

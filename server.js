require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connect = require('./db');
const User = require('./user.model')

const port = process.env.PORT || 8000;
const app = express();
connect()

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.sendStatus(200)
})

app.get('/greet', (req, res) => {
  res.send(`hola ${process.env.NAME}`)
})

app.post('/users', async (req, res) => {
  const user = await User.create(req.body)

  res.status(200).json(user)
})

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
});

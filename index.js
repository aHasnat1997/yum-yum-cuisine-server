const express = require('express')
const app = express()
const port = 7000
const cors = require('cors')
const chef = require('./chef-api.json');
const recipe = require('./recipe-api.json');

app.use(cors())


app.get('/', (req, res) => {
  res.send('chef recipe hunter server')
})

app.get('/chef', (req, res) => {
  res.send(chef)
})

app.get('/recipe', (req, res) => {
  res.send(recipe)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

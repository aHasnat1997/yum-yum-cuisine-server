const express = require('express')
const app = express()
const port = 7000
const cors = require('cors')
const chefs = require('./chef-api.json');
const recipes = require('./recipe-api.json');

app.use(cors())


app.get('/', (req, res) => {
  res.send('chef recipe hunter server');
})

app.get('/chef', (req, res) => {
  res.send(chefs);
})

app.get('/chef/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const chef = chefs.find(chef => chef.chef_id === id || {});
  console.log(id);
  res.send(chef);
})

app.get('/recipe', (req, res) => {
  res.send(recipes);
})

app.get('/recipe/:id', (req, res) => {
  const id = (req.params.id);
  const recipe = recipes.find(recipe => recipe.recipe_id === id || {});
  res.send(recipe);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

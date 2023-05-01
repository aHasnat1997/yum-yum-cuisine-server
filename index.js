const express = require('express')
const app = express()
const port = 7000
const cors = require('cors')

app.use(cors())


app.get('/', (req, res) => {
  res.send('chef recipe hunter server')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

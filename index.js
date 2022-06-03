const express = require('express')
const app = express()
const port = 3000;

app.use('/api/auth',require('./routes/auth'));

app.get('/', (req, res) => {
  res.send('Fanta Volley');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
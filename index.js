const express = require('express')
const app = express()
const port = 3001;
const {connect,showTable, con} = require('./mysqlConnect');

app.use('/api/auth',require('./routes/auth'));
connect();

app.get('/', (req, res) => {
  var a = query("Working on");
  res.send('working on');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express');
const app = express();
const axios = require('axios')

const port = 3000;

app.use('/:id', express.static('public'));

app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})
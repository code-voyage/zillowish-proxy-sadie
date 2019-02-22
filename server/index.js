const express = require('express');
const app = express();
const axios = require('axios')

const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})

app.get('/:id', (req, res) => {
  axios.get(`http://localhost:3001/houses/${req.params.id}`)
  .then(response => {
    res.send(response.data)
  })
  .catch(err => {console.log(err)})
})
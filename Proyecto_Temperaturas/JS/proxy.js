const express = require('express');
const axios = require('axios');

const app = express();
const port = 5500;

app.use('/', (req, res) => {
  const url = 'https://gps.coltrack.com/gps/api.jsp' + req.url;
  axios({ method: req.method, url: url, data: req.body, headers: req.headers })
    .then(response => {
      res.status(response.status).send(response.data);
    })
    .catch(error => {
      res.status(error.response.status).send(error.response.data);
    });
});

app.listen(port, () => {
  console.log(`Proxy server running on http://127.0.0.1:${port}`);
});
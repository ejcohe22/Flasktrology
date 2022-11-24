const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});

const express = require('express');
//const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');

// Server Variables
const app = express();
const port = process.env.PORT || 5000;
app.set('view engine', 'ejs');

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: true}));

// Request Variables
const baseUrl = 'http://sandipbgt.com/theastrologer/api';
const astro = {signs: ['stuff']};

app.get('/', async function(req, res) {
  await getSunsigns()
      .then((res) => astro['signs'] = res.data)
      .catch((err) => console.log(err));

  // Object.values(sunsigns).forEach((sign)=> console.log(sign));

  res.render( 'index', {sunsigns: astro['signs']} );
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});

/**
 * Gets a list of sunsigns. Call into sandipbgpt api
 * https://github.com/sandipbgt/theastrologer-api
 *
 * @return {promise} promise with a list of sunsigns used by the API
 */
async function getSunsigns() {
  return await axios.get(`${baseUrl}/sunsigns`);
}

/**
 * Gets todays horoscope for the given sign. Call into sandipbgpt api
 * https://github.com/sandipbgt/theastrologer-api
 *
 * @return {promise} promise with a list of sunsigns used by the API
 */
 async function getTodaysHoroscope(sign) {
  return await axios.get(`${baseUrl}/horoscope/${sign}/today`);
}

/**
 * 
 */
app.post('/sunSignQuery', async (req, res) => {
  await getTodaysHoroscope(req.body.form_1_sunsign)
    .then((res) => astro['fortune'] = res.data)
    .catch((err) => console.log(err));
    console.log(astro['fortune'])
  res.render( 'horoscope', {horoscope: astro['fortune']} );
});
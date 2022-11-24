const express = require('express');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');

// Server Variables
const app = express();
const port = process.env.PORT || 5000;
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Request Variables
const baseUrl = "http://sandipbgt.com/theastrologer/api";
const astro = {signs: ['stuff']}

app.get('/', async function(req, res) {
  await get_sunsigns()
    .then(res => astro['signs'] = res.data)
    .catch(err => console.log(err));

  //Object.values(sunsigns).forEach((sign)=> console.log(sign));

  res.render( 'index', {sunsigns: astro['signs']} );
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});

// get sun signs in an array as request
async function get_sunsigns(){
  return await axios.get(`${baseUrl}/sunsigns`)
}

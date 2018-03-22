const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const yelpAPI = require('yelp-api');

const PORT = 9000;
const app = express();
// yelp api config
const apiKey = '3nps0PrS5RIp9M7n8b8_RNe2n88olwHkvHwat3aZf7w8KzGmdxHWbFvhl093XMho6jVp8feu-0pgeyg1sPOiGVb5XgLIkU_o6Pz16krKYVALUacqx40HMmbix-6zWnYx'
const yelp = new yelpAPI(apiKey);
let params = [{ location: 10013 }];
// middleware
app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Hello Moto");
});

app.get('/food/galvanize', (req, res) => {
  yelp.query('businesses/search', params)
    .then(data => {
      // Success
      res.send(data);
    })
    .catch(err => {
      // Failure
      console.log(err);
    });
  });

app.listen(PORT, () => {
  console.log('Ready to serve...');
});

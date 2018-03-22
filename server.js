const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 9000;
const app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Hello Moto");
});

app.listen(PORT, () => {
  console.log('Ready to serve...');
});

const express = require('express');
const os = require('os');
var bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json())

app.use(express.static('dist'));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

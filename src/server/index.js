const express = require('express');
const os = require('os');
var bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json())

app.use(express.static('dist'));
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.get('api.icndb.com/jokes/random?firstName=John&amp;lastName=Doe', (req, res) => {
    console.log("BODY", res)
    // res.send({ username: os.userInfo().username })
})

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

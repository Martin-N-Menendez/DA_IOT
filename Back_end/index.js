
//var bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json())


var express = require('express');
const cors = require('cors')

var app = express();
var PORT = 3000;

//ruteo 
var routerDisp = require('./routes/dispositivo');
var routerMedicion = require('./routes/medicion');

app.use(express.json());

var corsConfig={ origin: '*', optionSucessStatus:200 };
app.use(cors(corsConfig));

app.use('/dispositivo', routerDisp);
app.use('/medicion', routerMedicion);

app.listen(PORT, function(req, res) {
    console.log("API Funcionando ");
});
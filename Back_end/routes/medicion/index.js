var express = require('express');
var routerMedicion = express.Router();
var pool = require('../../mysql');

class Medicion {
    constructor(Id = 0, dispId = 0, tiempo = new Date("1900-01-01"), valor = 0, dispositivoId = 0) {
        this._Id = Id;
        this._dispId = dispId;
        this._tiempo = tiempo;
        this._temperatura = temperatura;
        this._magnetico = magnetico;
        this._giroscopio = giroscopio;
        this._aceleracion= aceleracion;
    }
    get Id()                { return this._Id; }
    get dispId()            { return this._dispId; }
    get tiempo()            { return this._tiempo; }
    get temperatura()       { return this._temperatura; }
    get magnetico()         { return this._magnetico; }
    get giroscopio()        { return this._giroscopio; }
    get aceleracion()       { return this._aceleracion; }


    set Id(e) { this._Id = e; }
    set dispId(f) { this._dispId = f; }
    set tiempo(e) { this._tiempo = e; }
    set temperatura(e) { this._temperatura = e; }
    set magnetico(e) { this._magnetico = e; }
    set giroscopio(e) { this._giroscopio = e; }
    set aceleracion(e) { this._aceleracion = e; }
}


// Recibe id de dispositivo y devuelve todas las mediciones desde la mas nueva hasta la mas vieja
routerMedicion.get('/:id/todas', function(req, res) {
    pool.query('Select * from Mediciones where dispId=? order by tiempo desc', [req.params.id], function(err, result, fields) {
        console.log(result);
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});


// Recibe id de dispositivo y devuelve la medición mas nueva
routerMedicion.get('/:id', function(req, res) {
    pool.query('Select * from Mediciones where dispId=? order by tiempo desc', [req.params.id], function(err, result, fields) {
        var r = result[0];
        console.log(r);
        let medicion = new Medicion(
            r.medicionId,
            new Date(r.fecha),
            r.valor
        );
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(r);
    });
});

routerMedicion.post('/', function(req, res){
    console.log(req.body);
    console.log(req.body[0] + ' ' + req.body[1]);
    pool.query('INSERT INTO `Mediciones` (`ID`, `dispID`, `tiempo`, `temperatura`, `magnetico`, `giroscopio`, `aceleracion`) VALUES (?,?,?,?,?,?,?);',
    [req.body[0], rew.body[1], new Date(), req.body[2],req.body[3],req.body[4],req.body[5]], (err, result, fields) => { 
      if(err) {
        res.send(err).status(400);
        return;
      }
      res.send(result);
    })
  });


module.exports = routerMedicion;
var express = require('express');
var routerMedicion = express.Router();
var pool = require('../../mysql');

class Medicion {
    constructor(medicionId = 0, fecha = new Date("1900-01-01"), valor = 0, dispositivoId = 0) {
        this._medicionId = medicionId;
        this._fecha = fecha;
        this._valor = valor;
        this._dispositivoId = dispositivoId;
    }
    get medicionId() { return this._medicionId; }
    get fecha() { return this._fecha; }
    get valor() { return this._valor; }
    get dispositivoId() { return this._dispositivoId; }


    set medicionId(e) { this._medicionId = e; }
    set fecha(f) { this._fecha = f; }
    set valor(e) { this._valor = e; }
    set dispositivoId(e) { this._dispositivoId = e; }
}


// Recibe id de dispositivo y devuelve todas las mediciones desde la mas nueva hasta la mas vieja
routerMedicion.get('/:id/todas', function(req, res) {
    pool.query('Select * from Mediciones where dispositivoId=? order by fecha desc', [req.params.id], function(err, result, fields) {
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
    pool.query('Select * from Mediciones where dispositivoId=? order by fecha desc', [req.params.id], function(err, result, fields) {
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
    pool.query('INSERT INTO Mediciones (valor , fecha , dispositivoId) VALUES (?,?,?);',
    [req.body[0], new Date(), req.body[1]], (err, result, fields) => { 
      if(err) {
        res.send(err).status(400);
        return;
      }
      res.send(result);
    })
  });


module.exports = routerMedicion;
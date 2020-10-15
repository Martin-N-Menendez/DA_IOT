
//var Dispositivo = require('../../models/dispositivo.model')       // TODO importar los modelos como dios manda
//var Medicion = require('../../models/medicion.model')
//var Electrovalvula = require('../../models/electrovalvula.model')

var express = require('express');
var routerDispositivo = express.Router();
var pool = require('../../mysql');

class Dispositivo {
    constructor(id = 0, nombre = 'dispositivo', ubicacion = 'lugar') {
        this._dispositivoID = id;
        this._nombre = nombre;
        this._ubicacion = ubicacion;
    }
    get id() { return this._dispositivoID; }
    set id(id) { this._dispositivoID = id; }

    get nombre() { return this._nombre; }
    set nombre(n) { this._nombre = n; }

    get ubicacion() { return this._ubicacion; }
    set ubicacion(u) { this._ubicacion = u; }
}


//Devuelve un array de dispositivos
routerDispositivo.get('/', function(req, res) {
    pool.query('SELECT * FROM Dispositivos', function (err, result) {
        if (err) {
            res.status(500).send('Error en la consulta');
        }
        res.status(200).json(result);
    });
});


//Devuelve un dispositivos en particular
routerDispositivo.get('/:id', function(req, res) {
    pool.query('SELECT * FROM Dispositivos WHERE dispositivoId=?',req.params.id,  function(err, result, fields) {       // TODO que hago si el ID no existe?
        if (err) {
            res.send(err).status(400);
            return;
        }
        var r = result[0];
        console.log(r);
        let dispositivo = new Dispositivo(
            r.dispositivoID,
            r.nombre,
            r.ubicacion
        );       
        res.send(result);
    });
});

routerDispositivo.post('/:id', function(req, res){
    console.log("ADIOS",req.params.id);
    pool.query('DELETE FROM Dispositivos WHERE dispositivoId=?',req.params.id,  function(err, result, fields) {       // TODO que hago si el ID no existe?
        if (err) {
            res.send(err).status(400);
            return;
        }
        var r = result[0];
        console.log(r); 
        res.send(result);
    });
  });

  routerDispositivo.post('/', function(req, res){
    console.log(req.body);
    console.log('DELETE FROM Dispositivos WHERE dispositivoId='+req.body[0]+';');
    
    pool.query('DELETE FROM Dispositivos WHERE dispositivoId=?',[req.body[0]], (err, result, fields) => { 
      if(err) {
        console.log("CHE")
        res.send(err).status(400);
        return;
      }
      res.send(result);
    })
  });

module.exports = routerDispositivo;
//import { Electrovalvula } from './electrovalvula.model';
//import { Medicion } from './medicion.model';

var Electrovalvula = require('./electrovalvula.model');
var Medicion = require('./medicion.model');


export class Dispositivo {
    constructor(id = 0, nombre = 'dispositivo', ubicacion = 'lugar', medicion = new Medicion(), electrovalvula = new Electrovalvula()) {
        this._dispositivoId = id;
        this._nombre = nombre;
        this._ubicacion = ubicacion;
        this._medicion = medicion;
        this._electrovalvula = electrovalvula;
    }
    get id() { return this._dispositivoId; }
    set id(id) { this._dispositivoId = id; }

    get nombre() { return this._nombre; }
    set nombre(n) { this._nombre = n; }

    get ubicacion() { return this._ubicacion; }
    set ubicacion(u) { this._ubicacion = u; }

    get medicion() { return this._medicion; }
    set medicion(m) { this._medicion = m; }
    
    get electrovalvula() { return this._electrovalvula; }
    set electrovalvula(e) { this._electrovalvula = e; }
}

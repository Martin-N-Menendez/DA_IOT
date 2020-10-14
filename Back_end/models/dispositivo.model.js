//import { Electrovalvula } from './electrovalvula.model';
//import { Medicion } from './medicion.model';

export class Dispositivo {
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

//import { Electrovalvula } from './electrovalvula.model';
const Electrovalvula = require('./electrovalvula.model');

class RiegoLog {
    constructor(electrovalvula = new Electrovalvula(), apertura = 0, fecha = new Date('1900-01-01')) {
        this._electrovalvula = electrovalvula;
        this._apertura = apertura < 0 ? 0 : apertura > 100 ? 100 : apertura;
        this._fecha = fecha;
    }
    get electrovalvula() { return this._electrovalvula; }
    set electrovalvula(e) { this._electrovalvula = e; }
    get apertura() { return this._apertura; }
    set apertura(value) {
        this._apertura = value < 0 ? 0 : value > 100 ? 100 : value;
    }
    get fecha() { return this._fecha; }
    set fecha(f) { this._fecha = f; }
}

class Electrovalvula {
    constructor(id = 0, nombre = 'electrovalvula', apertura = 0) {
        this._electrovalvulaId = id;
        this._nombre = nombre;
        this._apertura = apertura;
    }
    get id() { return this._electrovalvulaId; }
    set id(value) { this._electrovalvulaId = value; }
    get nombre() { return this._nombre; }
    set nombre(value) { this._nombre = value; }
    get apertura() { return this._apertura; }
    set apertura(value) {
        this._apertura = value < 0 ? 0 : value > 100 ? 100 : value;
    }
}

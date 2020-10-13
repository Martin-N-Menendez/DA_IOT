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

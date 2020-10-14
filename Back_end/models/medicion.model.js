class Medicion {
    constructor(
        ID = 0,
        dispID = 0,
        tiempo = new Date("1900-01-01"),
        temperatura = 0,
        magnetico = 0,
        giroscopio = 0,
        aceleracion = 0,
        valvula = 0) {

        this._ID = ID;
        this._dispID = dispID;
        this._tiempo = tiempo;
        this._temperatura = temperatura;
        this._magnetico = magnetico;
        this._giroscopio = giroscopio;
        this._aceleracion = aceleracion;
        this._valvula = valvula;
    }
 
    get ID() { return this._ID; }
    set ID(e) { this._ID = e; }

    get dispID() { return this._dispID; }
    set dispID(e) { this._dispID = e; }

    get tiempo() { return this._tiempo; }
    set tiempo(e) { this._tiempo = e; }

    get temperatura() { return this._temperatura; }
    set temperatura(e) { this._temperatura = e; }

    get magnetico() { return this._magnetico; }
    set magnetico(e) { this._magnetico = e; }

    get giroscopio() { return this._giroscopio; }
    set giroscopio(e) { this._giroscopio = e; }

    get aceleracion() { return this._aceleracion; }
    set aceleracion(e) { this._aceleracion = e; }

    get valvula() { return this._valvula; }
    set valvula(e) { this._valvula = e; }
}

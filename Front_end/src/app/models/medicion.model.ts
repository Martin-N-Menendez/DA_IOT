export class Medicion {
    private _ID: number;
    private _dispID: number;
    private _tiempo: Date;
    private _temperatura: number;
    private _magnetico: number;
    private _giroscopio: number;
    private _aceleracion: number;
    private _valvula: number;

    constructor(
        ID: number = 0,
        dispID: number = 0,
        tiempo: Date = new Date("1900-01-01"),
        temperatura: number = 0,
        magnetico: number = 0,
        giroscopio: number = 0,
        aceleracion: number = 0,
        valvula: number = 0) {

        this._ID = ID;
        this._dispID = dispID;
        this._tiempo = tiempo;
        this._temperatura = temperatura;
        this._magnetico = magnetico;
        this._giroscopio = giroscopio;
        this._aceleracion = aceleracion;
        this._valvula = valvula;
    }

    public get ID(): number { return this._ID; }
    public set ID(e: number) { this._ID = e; }

    public get dispID(): number { return this._dispID; }
    public set dispID(e: number) { this._dispID = e; }

    public get tiempo(): Date { return this._tiempo; }
    public set tiempo(e: Date) { this._tiempo = e; }

    public get temperatura(): number { return this._temperatura; }
    public set temperatura(e: number) { this._temperatura = e; }

    public get magnetico(): number { return this._magnetico; }
    public set magnetico(e: number) { this._magnetico = e; }

    public get giroscopio(): number { return this._giroscopio; }
    public set giroscopio(e: number) { this._giroscopio = e; }

    public get aceleracion(): number { return this._aceleracion; }
    public set aceleracion(e: number) { this._aceleracion = e; }

    public get valvula(): number { return this._valvula; }
    public set valvula(e: number) { this._valvula = e; }
}
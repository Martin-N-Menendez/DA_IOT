export class Medicion {
    private _medicionId: number;
    private _fecha: Date;
    private _valor: number;
    private _dispositivoId: number;

    constructor(
        medicionId: number = 0,
        fecha: Date = new Date("1900-01-01"),
        valor: number = 0,
        dispositivoId: number = 0) {

        this._medicionId = medicionId;
        this._fecha = fecha;
        this._valor = valor;
        this._dispositivoId = dispositivoId;
    }

    public get medicionId(): number { return this._medicionId; }
    public set medicionId(e: number) { this._medicionId = e; }

    public get fecha(): Date { return this._fecha; }
    public set fecha(f: Date) { this._fecha = f; }

    public get valor(): number { return this._valor; }
    public set valor(e: number) { this._valor = e; }

    public get dispositivoId(): number { return this._dispositivoId; }
    public set dispositivoId(e: number) { this._dispositivoId = e; }
}
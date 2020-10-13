export class RiegoLog {
    private _logRiegoId: number;
    private _electrovalvulaId: number;
    private _apertura: number;
    private _fecha: Date;

    constructor(
        logRiegoId: number = 0,
        electrovalvulaId: number = 1, 
        apertura: number = 0,
        fecha: Date = new Date('1900-01-01')
        ) {
            this._logRiegoId = logRiegoId;
            this._electrovalvulaId = electrovalvulaId;
            this._apertura = apertura < 0 ? 0 : apertura > 100 ? 100 : apertura;
            this._fecha = fecha;
    }

    public get logRiegoId(): number { return this._logRiegoId; }
    public set logRiegoId(e: number) { this._logRiegoId = e; }

    public get electrovalvulaId(): number { return this._electrovalvulaId; }
    public set electrovalvulaId(e: number) { this._electrovalvulaId = e; }

    public get apertura(): number { return this._apertura; }
    public set apertura(value: number) { this._apertura = value < 0 ? 0 : value > 100 ? 100 : value;}

    public get fecha(): Date { return this._fecha; }
    public set fecha(f: Date) { this._fecha = f; }
}
export class Electrovalvula {
    private _electrovalvulaId: number;
    private _nombre: string;
    private _apertura: number;

    constructor(
        id: number = 0,
        nombre: string = 'electrovalvula',
        apertura: number = 0) {
        this._electrovalvulaId = id;
        this._nombre = nombre;
        this._apertura = apertura;
    }

    public get id(): number { return this._electrovalvulaId; }
    public set id(value: number) { this._electrovalvulaId = value; }

    public get nombre(): string { return this._nombre; }
    public set nombre(value: string) { this._nombre = value; }

    public get apertura(): number { return this._apertura; }
    public set apertura(value: number) {
        this._apertura = value < 0 ? 0 : value > 100 ? 100 : value;
    }
}
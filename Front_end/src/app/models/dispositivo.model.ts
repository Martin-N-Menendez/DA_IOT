import { Medicion } from './medicion.model';
export class Dispositivo {
    private _dispositivoID: number;
    private _nombre: string;
    private _ubicacion: string;

    public constructor(
        dispositivoID: number = 0,
        nombre: string = 'dispositivo',
        ubicacion: string = 'lugar'
    ) {
        this._dispositivoID = dispositivoID;
        this._nombre = nombre;
        this._ubicacion = ubicacion;
    }

    public get dispositivoID(): number { return this._dispositivoID; }
    public set dispositivoID(id: number) { this._dispositivoID = id; }

    public get nombre(): string { return this._nombre; }
    public set nombre(n: string) { this._nombre = n; }

    public get ubicacion(): string { return this._ubicacion; }
    public set ubicacion(u: string) { this._ubicacion = u; }
}
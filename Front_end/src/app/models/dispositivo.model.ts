import { Electrovalvula } from './electrovalvula.model';
import { Medicion } from './medicion.model';
export class Dispositivo {
    private _dispositivoId: number;
    private _nombre: string;
    private _ubicacion: string;
    private _electrovalvulaId: number;

    public constructor(
        dispositivoId: number = 0,
        nombre: string = 'dispositivo',
        ubicacion: string = 'lugar',
        electrovalvulaId: number = 1
    ) {
        this._dispositivoId = dispositivoId;
        this._nombre = nombre;
        this._ubicacion = ubicacion;
        this._electrovalvulaId = electrovalvulaId;
    }

    public get dispositivoId(): number { return this._dispositivoId; }
    public set dispositivoId(id: number) { this._dispositivoId = id; }

    public get nombre(): string { return this._nombre; }
    public set nombre(n: string) { this._nombre = n; }

    public get ubicacion(): string { return this._ubicacion; }
    public set ubicacion(u: string) { this._ubicacion = u; }

    public get electrovalvulaId(): number { return this._electrovalvulaId; }
    public set electrovalvulaId(e: number) { this._electrovalvulaId = e; }
}
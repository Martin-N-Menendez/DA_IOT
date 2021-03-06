import { Injectable } from '@angular/core';
import { Dispositivo } from '../models/dispositivo.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DispositivoService {

  constructor(private _http: HttpClient) { }

  public get listado(): Promise<Array<Dispositivo>> {
    return this._http.get("http://localhost:3000/dispositivo").toPromise().then(
      (listado: Array<Dispositivo>) => {
        console.log("Leido:",listado);
        let listado2: Array<Dispositivo> = new Array<Dispositivo>();
        listado.forEach(r => listado2.push(new Dispositivo(
          r.dispositivoID, 
          r.nombre, 
          r.ubicacion
          )));
        return listado2;
      }
    ).catch(
      (err) => {
        console.log("Error en la consulta");
        return new Array<Dispositivo>(new Dispositivo());
      }
    );
  }

  public getDispositivo(id: number): Promise<Dispositivo> {
    return this._http.get("http://localhost:3000/dispositivo/" + id).toPromise().then(
      (r: Dispositivo) => {
        let d = r[0];
        let dispositivo: Dispositivo = new Dispositivo(
          d.dispositivoID, 
          d.nombre, 
          d.ubicacion
        );
        //console.log("Dispositivo prometido " + dispositivo );
        return dispositivo;
      }
    ).catch((err) => {
      console.log("error en la consulta");
      return new Dispositivo();
    });
  }

  public removeDisp(x: Dispositivo) {
    return this._http.post(`http://localhost:3000/dispositivo/`,[x.dispositivoID,x.nombre]).toPromise()
      .then((result) => {
        return result;
      });
  }

}
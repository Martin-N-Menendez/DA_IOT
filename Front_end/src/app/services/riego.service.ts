import { Injectable } from '@angular/core';
import { RiegoLog } from '../models/riego.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RiegoService {

  constructor(private _http: HttpClient) { }

  public getRiegoLog(valve: number): Promise<Array<RiegoLog>> {
    return this._http.get(`http://localhost:3000/riego/${valve}`)
      .toPromise()
      .then((table: Array<RiegoLog>) => {
        let logRiego: Array<RiegoLog> = new Array<RiegoLog>();
        //console.log(logRiego);
        table.forEach(row => logRiego.push(new RiegoLog(
          row.logRiegoId,
          row.electrovalvulaId,
          row.apertura,
          row.fecha
        )))
        return logRiego;
      })
      .catch((err) => {
        console.log("error en la consulta de riego");
        return new Array<RiegoLog>(new RiegoLog());
      })
  }

  public getnewRiegoLog(id: number): Promise<RiegoLog> {
    return this._http.get("http://localhost:3000/riego/" + id + "/todas").toPromise().then(
      (r: RiegoLog) => {
        let d = r[0];
        let logRiego: RiegoLog = new RiegoLog(
          d.logRiegoId, 
          d.electrovalvulaId, 
          d.apertura, 
          d.fecha
        );
        //console.log("Dispositivo prometido " + dispositivo );
        return logRiego;
      }
    ).catch((err) => {
      console.log("error en la consulta de riego");
      return new RiegoLog();
    });
  }

  public getnewRiegoLogs(id: number): Promise<Array<RiegoLog>> {
    return this._http.get("http://localhost:3000/riego/" + id + "/todas").toPromise().then( 
      (r: Array<RiegoLog>) => {
        //console.log("Riego prometido " + r );
        return r;
      }
    ).catch((err) => {
      console.log("error en la consulta de riego");
      return new Array<RiegoLog>();
    });
  }

  public addnewRiegoLog(x: RiegoLog) {
    return this._http.post(`http://localhost:3000/riego/`,[x.apertura, x.electrovalvulaId]).toPromise()
      .then((result) => {
        return result;
      });
  }

}

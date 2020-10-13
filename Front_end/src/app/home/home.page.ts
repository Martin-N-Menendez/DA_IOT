import { Component, OnInit } from '@angular/core';
import { DispositivoService } from '../services/dispositivo.service';
import { Dispositivo } from '../models/dispositivo.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public listado: Array<Dispositivo>;
  constructor(public dServ: DispositivoService) {
    this.listado = new Array<Dispositivo>();
    this.dServ.listado.then(list => {
      this.listado = list;
    });
   }

  ngOnInit() { }

}

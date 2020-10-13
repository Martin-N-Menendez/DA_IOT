import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RiegoLog } from '../models/riego.model';
import { RiegoService } from '../services/riego.service';
import { Dispositivo } from '../models/dispositivo.model';
import { DispositivoService } from '../services/dispositivo.service';

@Component({
  selector: 'app-log-riego',
  templateUrl: './log-riego.page.html',
  styleUrls: ['./log-riego.page.scss'],
})
export class LogRiegoPage implements OnInit {

  public disp: Dispositivo;
  public logsRiego: Array<RiegoLog>;
  public dispId: number;

  constructor(private router: ActivatedRoute, private rServ: RiegoService) {
    this.logsRiego = new Array<RiegoLog>();

    this.dispId = parseInt(this.router.snapshot.paramMap.get('Id'));
    console.log(this.dispId);
    this.rServ.getnewRiegoLogs(this.dispId).then(r => {
      this.logsRiego = r;
      console.log("riego:",r);
    });
  }

  ngOnInit() {
    
  }

}



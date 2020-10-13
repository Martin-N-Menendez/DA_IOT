import { Component, OnInit } from '@angular/core';
import { Medicion } from '../models/medicion.model';
import { MedicionesService } from '../services/mediciones.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mediciones',
  templateUrl: './mediciones.page.html',
  styleUrls: ['./mediciones.page.scss'],
})
export class MedicionesPage implements OnInit {

  public Mediciones: Array<Medicion>;
  public dispId: number;

  constructor(private router: ActivatedRoute, private mServ: MedicionesService) {
    this.Mediciones = new Array<Medicion>();

    this.dispId= parseInt(this.router.snapshot.paramMap.get('Id'));
    console.log(this.dispId);
    this.mServ.getMediciones(this.dispId).then(r => {
      this.Mediciones = r;
      console.log("medicion:",r);
    });
  }


  ngOnInit() {
    
  }

}

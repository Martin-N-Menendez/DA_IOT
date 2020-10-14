//correr antes npm install --save highcharts
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Dispositivo } from '../models/dispositivo.model';
import { Medicion } from '../models/medicion.model';
import { DispositivoService } from '../services/dispositivo.service';
import { ActivatedRoute } from '@angular/router';
import { MedicionesService } from '../services/mediciones.service';

declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);

@Component({
  selector: 'app-detalle-sensor',
  templateUrl: './detalle-sensor.page.html',
  styleUrls: ['./detalle-sensor.page.scss'],
})
export class DetalleSensorPage implements OnInit {

  public mensajeBoton: string = "ABRIR ELECTROVALVULA";
  
  private valorObtenido: number = 0;
  public myChart;
  private chartOptions;

  public dispId: number;
  public apertura: number = 0;

  public dispositivo: Dispositivo;
  public medicion: Medicion;
  public medicion_log_post: Medicion;

  public Dispositivos: Array<Dispositivo>;
  public mediciones: Array<Medicion>;

  constructor(private dServ: DispositivoService, private router: ActivatedRoute, private mServ: MedicionesService) {

    this.dispId = parseInt(this.router.snapshot.paramMap.get('id'));

    this.Dispositivos = new Array<Dispositivo>();
    this.mediciones = new Array<Medicion>();

    this.dispositivo = new Dispositivo();
    this.medicion = new Medicion();    
  }

  ngOnInit() {  
    this.actualizar_datos();  
    this.generarChart();    
  }

  ionViewWillEnter(){
    this.actualizar_datos();  
    this.generarChart();
  }

  actualizar_datos(){

    this.mServ.getMedicion(this.dispId).then(d => {
      console.log("Medido",d);
      this.medicion = d;
    });
    this.valorObtenido = Number(this.medicion.temperatura);
    this.apertura = Number(this.medicion.valvula);

    //console.log("Valor",this.valorObtenido);
    console.log("Ap",this.apertura);


  if(this.apertura == 0)
    this.mensajeBoton = "ABRIR ELECTROVALVULA " + this.medicion.dispID;
  else
    this.mensajeBoton = "CERRAR ELECTROVALVULA " + this.medicion.dispID;

  }

  generarChart() {
    this.chartOptions={
      chart: {
          type: 'gauge',
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
        }
        ,title: {
          text: "Sensor #"+ this.dispId
        }

        ,credits:{enabled:false}
        
           
        ,pane: {
            startAngle: -150,
            endAngle: 150
        } 
        // the value axis
      ,yAxis: {
        min: 0,
        max: 100,
  
        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',
  
        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: '°C'
        },
        plotBands: [{
            from: 0,
            to: 10,
            color: '#55BF3B' // green
        }, {
            from: 10,
            to: 30,
            color: '#DDDF0D' // yellow
        }, {
            from: 30,
            to: 100,
            color: '#DF5353' // red
        }]
    }
    ,
  
    series: [{
        name: '°C',
        data: [this.valorObtenido],
        tooltip: {
            valueSuffix: ' °C'
        }
    }]

    };
    this.myChart = Highcharts.chart('highcharts', this.chartOptions );
  }

  public actualizarValvula() {
  
    //console.log("actual:",this.riego_log.apertura);
    if(this.apertura == 0)
    {
      this.abrirValvula();
      this.actualizar_datos(); 
    }
    else
    {
      this.cerrarValvula();
      this.actualizar_datos(); 
    } 
  }

  public abrirValvula() {

    this.medicion_log_post = new Medicion();

    this.mServ.getMedicion(this.dispId).then(d => {
      console.log("Medido_A",d);
      this.medicion = d;
    });

    this.medicion_log_post.dispID = this.dispId;
    this.medicion_log_post.temperatura = this.medicion.temperatura; 
    this.medicion_log_post.tiempo = this.medicion.tiempo;
    this.medicion_log_post.magnetico = this.medicion.magnetico;
    this.medicion_log_post.giroscopio = this.medicion.giroscopio;
    this.medicion_log_post.aceleracion = this.medicion.aceleracion;
    this.medicion_log_post.valvula = 1;
    this.apertura = this.medicion_log_post.valvula;

    this.mServ.addnewMedicionLog(this.medicion_log_post).then( (res) => {
      this.mensajeBoton = "CERRAR ELECTROVALVULA" + ' ' + this.dispId; 
      console.log("C",this.medicion_log_post);  
      this.apertura = this.medicion_log_post.valvula;
    })
    
    this.myChart.update(
      {
        series: [
          {
            name: '°C',
            data: [this.medicion_log_post.temperatura],
            tooltip: { valueSuffix: ' °C' }
          }
        ]
      }
    );
    
  }

  public cerrarValvula() {
    
    this.medicion_log_post = new Medicion();
    this.mServ.getMedicion(this.dispId).then(d => {
      console.log("Medido_C",d);
      this.medicion = d;
    });

    
    this.medicion_log_post.dispID = this.dispId;
    this.medicion_log_post.temperatura = 0; 
    this.medicion_log_post.tiempo = new Date();
    this.medicion_log_post.magnetico = this.medicion.magnetico;
    this.medicion_log_post.giroscopio = this.medicion.giroscopio;
    this.medicion_log_post.aceleracion = this.medicion.aceleracion;
    this.medicion_log_post.valvula = 0;
    this.apertura = this.medicion_log_post.valvula;

    this.mServ.addnewMedicionLog(this.medicion_log_post).then( (res) => {
      this.mensajeBoton = "ABRIR ELECTROVALVULA" + ' ' + this.dispId;
      console.log("A",this.medicion_log_post);  
      this.apertura = this.medicion_log_post.valvula;
    })
    
    this.myChart.update(
      {
        series: [
          {
            name: '°C',
            data: [this.medicion_log_post.temperatura],
            tooltip: { valueSuffix: ' °C' }
          }
        ]
      }
    );

  }

}


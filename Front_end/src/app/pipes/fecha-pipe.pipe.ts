import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechaPipe'
})
export class FechaPipePipe implements PipeTransform {

    transform(value: string): string {
      let fecha = new Date(value);

      let salida: string;

      let dia: string = ('0' + fecha.getDate()).slice(-2);
      let mes: string = ('0' + (fecha.getMonth() + 1)).slice(-2);
      let anio: string = fecha.getFullYear().toString();

      let hora: string = ('0' + (fecha.getHours() + 1)).slice(-2);
      let minuto: string = ('0' + (fecha.getMinutes() + 1)).slice(-2);
      let segundo: string = ('0' + (fecha.getSeconds() + 1)).slice(-2);

      salida = dia + '/' + mes + '/' + anio + ' - ' + hora + 'h ' + minuto + 'm ' + segundo +'s';
      //console.log(salida);

      return salida;
    }

}

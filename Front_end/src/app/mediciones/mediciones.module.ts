import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FechaPipePipe } from '../pipes/fecha-pipe.pipe';
import { ResaltarDirective } from '../directives/atributo-directive.directive';
import { IonicModule } from '@ionic/angular';

import { MedicionesPageRoutingModule } from './mediciones-routing.module';

import { MedicionesPage } from './mediciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicionesPageRoutingModule
  ],
  declarations: [MedicionesPage, FechaPipePipe, ResaltarDirective]
})
export class MedicionesPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogRiegoPage } from './log-riego.page';

const routes: Routes = [
  {
    path: '',
    component: LogRiegoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogRiegoPageRoutingModule {}

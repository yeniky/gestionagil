import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdopcionMascotaPage } from './adopcion-mascota.page';

const routes: Routes = [
  {
    path: '',
    component: AdopcionMascotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdopcionMascotaPageRoutingModule {}

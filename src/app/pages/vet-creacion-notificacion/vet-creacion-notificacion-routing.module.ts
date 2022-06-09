import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VetCreacionNotificacionPage } from './vet-creacion-notificacion.page';

const routes: Routes = [
  {
    path: '',
    component: VetCreacionNotificacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VetCreacionNotificacionPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarPaseoMascotaPage } from './registrar-paseo-mascota.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarPaseoMascotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarPaseoMascotaPageRoutingModule {}

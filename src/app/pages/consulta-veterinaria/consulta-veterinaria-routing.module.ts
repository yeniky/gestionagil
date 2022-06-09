import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaVeterinariaPage } from './consulta-veterinaria.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaVeterinariaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaVeterinariaPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilVeterinarioPage } from './perfil-veterinario.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilVeterinarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilVeterinarioPageRoutingModule {}

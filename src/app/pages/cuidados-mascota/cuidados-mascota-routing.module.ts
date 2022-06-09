import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuidadosMascotaPage } from './cuidados-mascota.page';

const routes: Routes = [
  {
    path: '',
    component: CuidadosMascotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuidadosMascotaPageRoutingModule {}

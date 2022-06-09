import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MascotaExtraviadaPage } from './mascota-extraviada.page';

const routes: Routes = [
  {
    path: '',
    component: MascotaExtraviadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MascotaExtraviadaPageRoutingModule {}

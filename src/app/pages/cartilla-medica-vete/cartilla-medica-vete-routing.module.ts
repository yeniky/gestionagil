import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartillaMedicaVetePage } from './cartilla-medica-vete.page';

const routes: Routes = [
  {
    path: '',
    component: CartillaMedicaVetePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartillaMedicaVetePageRoutingModule {}

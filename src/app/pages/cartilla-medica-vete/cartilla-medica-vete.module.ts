import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartillaMedicaVetePageRoutingModule } from './cartilla-medica-vete-routing.module';

import { CartillaMedicaVetePage } from './cartilla-medica-vete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartillaMedicaVetePageRoutingModule
  ],
  declarations: [CartillaMedicaVetePage]
})
export class CartillaMedicaVetePageModule {}

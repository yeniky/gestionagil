import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaVeterinariaPageRoutingModule } from './consulta-veterinaria-routing.module';

import { ConsultaVeterinariaPage } from './consulta-veterinaria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaVeterinariaPageRoutingModule
  ],
  declarations: [ConsultaVeterinariaPage]
})
export class ConsultaVeterinariaPageModule {}

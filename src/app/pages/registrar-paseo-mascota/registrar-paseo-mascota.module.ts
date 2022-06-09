import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarPaseoMascotaPageRoutingModule } from './registrar-paseo-mascota-routing.module';

import { RegistrarPaseoMascotaPage } from './registrar-paseo-mascota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarPaseoMascotaPageRoutingModule
  ],
  declarations: [RegistrarPaseoMascotaPage]
})
export class RegistrarPaseoMascotaPageModule {}

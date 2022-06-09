import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdopcionMascotaPageRoutingModule } from './adopcion-mascota-routing.module';

import { AdopcionMascotaPage } from './adopcion-mascota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdopcionMascotaPageRoutingModule
  ],
  declarations: [AdopcionMascotaPage]
})
export class AdopcionMascotaPageModule {}

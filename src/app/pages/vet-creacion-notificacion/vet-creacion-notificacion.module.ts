import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VetCreacionNotificacionPageRoutingModule } from './vet-creacion-notificacion-routing.module';

import { VetCreacionNotificacionPage } from './vet-creacion-notificacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VetCreacionNotificacionPageRoutingModule
  ],
  declarations: [VetCreacionNotificacionPage]
})
export class VetCreacionNotificacionPageModule {}

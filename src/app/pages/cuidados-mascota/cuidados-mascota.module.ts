import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuidadosMascotaPageRoutingModule } from './cuidados-mascota-routing.module';

import { CuidadosMascotaPage } from './cuidados-mascota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuidadosMascotaPageRoutingModule
  ],
  declarations: [CuidadosMascotaPage]
})
export class CuidadosMascotaPageModule {}

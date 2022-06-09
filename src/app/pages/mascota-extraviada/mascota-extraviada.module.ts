import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MascotaExtraviadaPageRoutingModule } from './mascota-extraviada-routing.module';

import { MascotaExtraviadaPage } from './mascota-extraviada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MascotaExtraviadaPageRoutingModule
  ],
  declarations: [MascotaExtraviadaPage]
})
export class MascotaExtraviadaPageModule {}

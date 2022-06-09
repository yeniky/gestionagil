import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilVeterinarioPageRoutingModule } from './perfil-veterinario-routing.module';

import { PerfilVeterinarioPage } from './perfil-veterinario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilVeterinarioPageRoutingModule
  ],
  declarations: [PerfilVeterinarioPage]
})
export class PerfilVeterinarioPageModule {}

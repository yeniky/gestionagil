import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'registro-usuario',
    loadChildren: () => import('./pages/registro-usuario/registro-usuario.module').then( m => m.RegistroUsuarioPageModule)
  },
  {
    path: 'perfil-usuario',
    loadChildren: () => import('./pages/perfil-usuario/perfil-usuario.module').then( m => m.PerfilUsuarioPageModule)
  },
  {
    path: 'mascota-extraviada',
    loadChildren: () => import('./pages/mascota-extraviada/mascota-extraviada.module').then( m => m.MascotaExtraviadaPageModule)
  },
  {
    path: 'registro-mascota',
    loadChildren: () => import('./pages/registro-mascota/registro-mascota.module').then( m => m.RegistroMascotaPageModule)
  },
  {
    path: 'consulta-veterinaria',
    loadChildren: () => import('./pages/consulta-veterinaria/consulta-veterinaria.module').then( m => m.ConsultaVeterinariaPageModule)
  },
  {
    path: 'adopcion-mascota',
    loadChildren: () => import('./pages/adopcion-mascota/adopcion-mascota.module').then( m => m.AdopcionMascotaPageModule)
  },
  {
    path: 'registrar-paseo-mascota',
    loadChildren: () => import('./pages/registrar-paseo-mascota/registrar-paseo-mascota.module').then( m => m.RegistrarPaseoMascotaPageModule)
  },
  {
    path: 'cuidados-mascota',
    loadChildren: () => import('./pages/cuidados-mascota/cuidados-mascota.module').then( m => m.CuidadosMascotaPageModule)
  },
  {
    path: 'perfil-veterinario',
    loadChildren: () => import('./pages/perfil-veterinario/perfil-veterinario.module').then( m => m.PerfilVeterinarioPageModule)
  },
  {
    path: 'cartilla-medica-vete',
    loadChildren: () => import('./pages/cartilla-medica-vete/cartilla-medica-vete.module').then( m => m.CartillaMedicaVetePageModule)
  },
  {
    path: 'vet-creacion-notificacion',
    loadChildren: () => import('./pages/vet-creacion-notificacion/vet-creacion-notificacion.module').then( m => m.VetCreacionNotificacionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

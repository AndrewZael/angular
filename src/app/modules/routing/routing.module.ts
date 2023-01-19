import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ServiciosComponent } from 'src/app/pages/servicios/servicios.component';
import { ContactoComponent } from 'src/app/pages/contacto/contacto.component';
import { NotfoundComponent } from 'src/app/pages/notfound/notfound.component';

const RUTAS: Routes = [
  {
    path: 'home',
    component: HomeComponent 
  },
  {
    path: 'servicios',
    component: ServiciosComponent
  },
  {
    path: 'servicios/:id',
    component: ServiciosComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(RUTAS)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {}

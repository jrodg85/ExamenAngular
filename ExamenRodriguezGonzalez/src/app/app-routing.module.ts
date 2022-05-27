import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
    path: "not-found" , component: NotFoundComponent
    },
    {
    path: "**" , //cualquier valor que no este indicado
    redirectTo: "not-found"
    },
    {
    path: 'personajes',
    loadChildren: () => import('./personajes/personajes.module').then(m => m.PersonajesModule)
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

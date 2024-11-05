import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FomularioGeradorDePessoasComponent } from './modulos/gerador-de-pessoas/fomulario-gerador-de-pessoas/fomulario-gerador-de-pessoas.component';

const routes: Routes = [
  { path: '', component: FomularioGeradorDePessoasComponent },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

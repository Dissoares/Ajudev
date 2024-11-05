import { FomularioGeradorDePessoasModule } from './modulos/gerador-de-pessoas/fomulario-gerador-de-pessoas/fomulario-gerador-de-pessoas.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FomularioGeradorDePessoasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

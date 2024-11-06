import { FomularioGeradorDePessoasModule } from './modulos/gerador-de-pessoas/fomulario-gerador-de-pessoas/fomulario-gerador-de-pessoas.module';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FomularioGeradorDePessoasModule,
    BrowserAnimationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

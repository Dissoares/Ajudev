import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FomularioGeradorDePessoasComponent } from './fomulario-gerador-de-pessoas.component';
import { DadosPessoaisDialogComponent } from '../dialogs/pessoa-dados-pessoais/dados-pessoais-dialog/dados-pessoais-dialog.component';
import { DadosEnderecoDialogComponent } from '../dialogs/pessoa-endereco/dados-endereco-dialog/dados-endereco-dialog.component';
import { DadosProfissionaisDialogComponent } from '../dialogs/pessoa-dados-profissionais/dados-profissionais-dialog/dados-profissionais-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import {DialogModule} from 'primeng/dialog';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    DialogModule,
    
  ],
  declarations: [
    FomularioGeradorDePessoasComponent,
    DadosPessoaisDialogComponent,
    DadosEnderecoDialogComponent,
    DadosProfissionaisDialogComponent
  ]
})
export class FomularioGeradorDePessoasModule { }
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dados-pessoais-dialog',
  templateUrl: './dados-pessoais-dialog.component.html',
  styleUrls: ['./dados-pessoais-dialog.component.scss'],
})
export class DadosPessoaisDialogComponent implements OnInit {
  @Output() dadosPessoaisSalvos = new EventEmitter<any>();
  public dadosPessoaisForm: FormGroup;
  public display: any

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  public criarFormularioDadosPessoais() {
    this.dadosPessoaisForm = this.fb.group({
      nome: [''],
      idade: [''],
      dataNacimento: [''],
      genero: [''],
    });
  }

  salvarDadosPessoais() {
    this.dadosPessoaisSalvos.emit(this.dadosPessoaisForm.value);
  }
}

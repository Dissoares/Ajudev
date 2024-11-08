import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dados-profissionais-dialog',
  templateUrl: './dados-profissionais-dialog.component.html',
  styleUrls: ['./dados-profissionais-dialog.component.scss'],
})
export class DadosProfissionaisDialogComponent implements OnInit {
  @Output() dadosProfissionaisSalvos = new EventEmitter<any>();
  public dadosProfissionaisForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  public criarFormularioDadosProfissionais() {
    this.dadosProfissionaisForm = this.fb.group({
      empresa: [''],
      cargo: [''],
      anosExperiencia: [''],
    });
  }

  salvarDadosProfissionais() {
    this.dadosProfissionaisSalvos.emit(this.dadosProfissionaisForm.value);
  }
}

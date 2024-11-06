import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-dados-profissionais-dialog',
  templateUrl: './dados-profissionais-dialog.component.html',
  styleUrls: ['./dados-profissionais-dialog.component.scss'],
})
export class DadosProfissionaisDialogComponent implements OnInit {
  @Output() dadosProfissionaisSalvos = new EventEmitter<any>();
  public dadosProfissionaisForm: UntypedFormGroup;
  constructor(private fb: UntypedFormBuilder) {}

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

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dados-endereco-dialog',
  templateUrl: './dados-endereco-dialog.component.html',
  styleUrls: ['./dados-endereco-dialog.component.scss'],
})
export class DadosEnderecoDialogComponent implements OnInit {
  @Output() enderecoSalvo = new EventEmitter<any>();
  public enderecoForm: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder
  ) {}

  ngOnInit() {
    this.criarFormularioEndereco();
  }

  public criarFormularioEndereco() {
    this.enderecoForm = this.fb.group({
      rua: [null, Validators.required],
      numero: [null, Validators.required],
      cidade: [null,Validators.required],
      estado: [null, Validators.required],
      cep: [null, Validators.required],
    });
  }

  public salvarEndereco() {
    this.enderecoSalvo.emit(this.enderecoForm.value);
  }
}

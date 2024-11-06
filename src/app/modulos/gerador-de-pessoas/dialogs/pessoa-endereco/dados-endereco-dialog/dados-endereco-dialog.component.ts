import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dados-endereco-dialog',
  templateUrl: './dados-endereco-dialog.component.html',
  styleUrls: ['./dados-endereco-dialog.component.scss'],
})
export class DadosEnderecoDialogComponent implements OnInit {
  @Output() enderecoSalvo = new EventEmitter<any>();
  public enderecoForm: FormGroup;

  constructor(
    private fb: FormBuilder
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

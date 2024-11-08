import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DadosPessoais } from 'src/app/models/dadosPessoais';


@Component({
  selector: 'app-dados-pessoais-dialog',
  templateUrl: './dados-pessoais-dialog.component.html',
  styleUrls: ['./dados-pessoais-dialog.component.scss'],
})
export class DadosPessoaisDialogComponent implements OnInit {
  public formularioDadosPessoais: FormGroup;

  @Output() public fecharModal = new EventEmitter<boolean>();
  @Output() public dadosPessoais = new EventEmitter<DadosPessoais>();

  @Input() public ativarModal: boolean = false;


  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.criarFormularioDadosPessoais();
  }

  public criarFormularioDadosPessoais() {
    this.formularioDadosPessoais = this.formBuilder.group({
      nome: [null, Validators.required],
      dataNascimento: [null, Validators.required],
      idade: [null],
      sexo: [null, Validators.required],
      email: [null],
      telefone: [null, Validators.required],
      cpf: [null, Validators.required],
      rg: [null, Validators.required],
      nacionalidade: [null],
      estadoCivil: [null],
    });
  }

  public fechar() {
    this.ativarModal = false;
    this.fecharModal.emit(true);
  }

  public enviarFormulario(): void {
    if (this.formularioDadosPessoais.valid) {
      this.dadosPessoais.emit(this.formularioDadosPessoais.value);
    } else {
      console.log('Form is invalid');
    }
  }
}

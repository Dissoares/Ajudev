import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fomulario-gerador-de-pessoas',
  templateUrl: './fomulario-gerador-de-pessoas.component.html',
  styleUrls: ['./fomulario-gerador-de-pessoas.component.scss'],
})
export class FomularioGeradorDePessoasComponent implements OnInit {
  public pessoa: any = {};
  public exibirEnderecoDialog = false;
  public exibirDadosPessoaisDialog = false;
  public exibirDadosProfissionaisDialog = false;

  constructor() {}

  ngOnInit() {}

  public salvarEndereco(endereco: any) {
    this.pessoa.endereco = endereco;
    this.exibirEnderecoDialog = false;
  }

  public salvarDadosPessoais(dadosPessoais: any) {
    this.pessoa.dadosPessoais = dadosPessoais;
    this.exibirDadosPessoaisDialog = false;
  }

  public salvarDadosProfissionais(dadosProfissionais: any) {
    this.pessoa.dadosProfissionais = dadosProfissionais;
    this.exibirDadosProfissionaisDialog = false;
  }
}

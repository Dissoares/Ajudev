import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fomulario-gerador-de-pessoas',
  templateUrl: './fomulario-gerador-de-pessoas.component.html',
  styleUrls: ['./fomulario-gerador-de-pessoas.component.scss'],
})
export class FomularioGeradorDePessoasComponent implements OnInit {
  
  public exibirDadosPessoaisDialog: boolean = false;

  constructor(

  ) { }

  ngOnInit() {
    
  }

  public abrirModal() {
    this.exibirDadosPessoaisDialog = true;
  }
}

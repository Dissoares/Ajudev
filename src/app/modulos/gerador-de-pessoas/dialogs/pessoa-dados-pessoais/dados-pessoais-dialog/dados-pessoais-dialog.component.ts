import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dados-pessoais-dialog',
  templateUrl: './dados-pessoais-dialog.component.html',
  styleUrls: ['./dados-pessoais-dialog.component.scss'],
})
export class DadosPessoaisDialogComponent implements OnInit {
  
  @Input() public ativarModal: boolean = false;

  constructor() {}

  ngOnInit() {}

  public fecharModal() {
    this.ativarModal = false;
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dados-pessoais-dialog',
  templateUrl: './dados-pessoais-dialog.component.html',
  styleUrls: ['./dados-pessoais-dialog.component.scss'],
})
export class DadosPessoaisDialogComponent implements OnInit {
  
  @Input() public ativarModal: boolean = false;
  @Output() public fecharModal = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  public fechar() {
    this.ativarModal = false;
    this.fecharModal.emit(true);
  }
}

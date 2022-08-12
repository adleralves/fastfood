import { LancheService } from './../../lanche.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Lanche } from '../../lanche.model';

@Component({
  selector: 'app-lanche-item',
  templateUrl: './lanche-item.component.html',
  styleUrls: ['./lanche-item.component.css'],
})
export class LancheItemComponent implements OnInit {
  @Input() lanche: Lanche;

  constructor(
    private _snackBar: MatSnackBar,
    private lancheService: LancheService) { }


  ngOnInit(): void {}

  abrirAviso(mensagem: string) {
    this._snackBar.open(mensagem);
  }

  addLanche() {
    this.lancheService.addCarrinho(this.lanche);
  }
}

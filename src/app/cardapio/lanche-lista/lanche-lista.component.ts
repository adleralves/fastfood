import { Component, OnInit } from '@angular/core';

import { Lanche } from '../lanche.model';
import { LancheService } from '../lanche.service';

@Component({
  selector: 'app-lanche-lista',
  templateUrl: './lanche-lista.component.html',
  styleUrls: ['./lanche-lista.component.css'],
})
export class LancheListaComponent implements OnInit {
  // lanches: Lanche[];
  gridColumns = 3;

  constructor() {}

  ngOnInit(): void {
    // this.lanches = this.lancheService.getLanches();
  }

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }
}

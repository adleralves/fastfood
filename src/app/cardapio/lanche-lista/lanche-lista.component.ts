import { LancheService } from './../lanche.service';
import { Component, OnInit } from '@angular/core';
import { Lanche } from '../lanche.model';

@Component({
  selector: 'app-lanche-lista',
  templateUrl: './lanche-lista.component.html',
  styleUrls: ['./lanche-lista.component.css']
})
export class LancheListaComponent implements OnInit {
  lanches: Lanche[];

  constructor(private lancheService: LancheService) { }

  ngOnInit(): void {
    this.lanches = this.lancheService.getLanches();
  }

  title = 'Card View Demo';

  gridColumns = 3;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }
}

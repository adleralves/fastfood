import { Component, OnInit } from '@angular/core';

import { LancheService } from './lanche.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css'],
  providers: [LancheService]
})
export class CardapioComponent implements OnInit {
  constructor(private lancheService: LancheService) {}

  ngOnInit(): void {}
}

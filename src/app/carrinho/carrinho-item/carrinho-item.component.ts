import { Component, Input, OnInit } from '@angular/core';
import { Carrinho } from '../carrinho.model';

@Component({
  selector: 'app-carrinho-item',
  templateUrl: './carrinho-item.component.html',
  styleUrls: ['./carrinho-item.component.css']
})
export class CarrinhoItemComponent implements OnInit {
  @Input() carrinho: Carrinho;

  constructor() { }

  ngOnInit(): void {
  }

}

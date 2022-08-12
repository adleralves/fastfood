import { Component, Input, OnInit } from '@angular/core';
import { Carrinho } from './carrinho.model';
import { CarrinhoService } from './carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  carrinhos: Carrinho[] = [];

  constructor(private carrinhoService: CarrinhoService) {
    this.carrinhos = this.carrinhoService.getCarrinho();
  }

  ngOnInit(): void {
  }

}

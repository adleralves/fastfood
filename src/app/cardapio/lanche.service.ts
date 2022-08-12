import { Injectable } from '@angular/core';
import { CarrinhoService } from '../carrinho/carrinho.service';
import { Lanche } from './lanche.model';

@Injectable()
export class LancheService {
  constructor(private carrinhoService: CarrinhoService) {

  }

  lanches: Lanche[] = [
    new Lanche(
      1,
      'Burger One',
      'Muitas carnes, com pão, queijo, salada e tudo que tem geralmente em um lanche.',
      'https://i.imgur.com/oM19pvM.jpg',
      27.90
    ),
    new Lanche(
      2,
      'Burger Two',
      'Muitas carnes, com pão, queijo, salada e tudo que tem geralmente em um lanche.',
      'https://i.imgur.com/5e8ZfMV.jpg',
      32.50
    ),
    new Lanche(
      3,
      'Burger Three',
      'Muitas carnes, com pão, queijo, salada e tudo que tem geralmente em um lanche.',
      'https://i.imgur.com/lihWnuW.jpg',
      29.50,
    ),
    new Lanche(
      4,
      'Burger Four',
      'Muitas carnes, com pão, queijo, salada e tudo que tem geralmente em um lanche.',
      'https://i.imgur.com/Ab4phXm.jpg',
      27.90
    ),
    new Lanche(
      5,
      'Burger Five',
      'Muitas carnes, com pão, queijo, salada e tudo que tem geralmente em um lanche.',
      'https://i.imgur.com/6GMYwUV.jpg',
      32.50
    ),
    new Lanche(
      6,
      'Burger Six',
      'Muitas carnes, com pão, queijo, salada e tudo que tem geralmente em um lanche.',
      'https://i.imgur.com/Fu6SP4j.jpg',
      29.50,
    )
  ];

  getLanches() {
    return this.lanches.slice();
  }

  addCarrinho(lanche: Lanche) {
    return this.carrinhoService.recebeLanche(lanche);
  }
}

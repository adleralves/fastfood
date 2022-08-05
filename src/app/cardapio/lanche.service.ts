import { Injectable, EventEmitter } from '@angular/core';
import { Lanche } from './lanche.model';

@Injectable()
export class LancheService {
  lanches: Lanche[] = [
    new Lanche(
      'X-SALADA',
      'Muitas carnes, com pão, queijo, salada e tudo que tem geralmente em um lanche.',
      'https://images.unsplash.com/photo-1584178639036-613ba57e5e39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    ),
    new Lanche(
      'X-BURGUER',
      'Muitas carnes, com pão, queijo, salada e tudo que tem geralmente em um lanche.',
      'https://images.unsplash.com/photo-1605789538467-f715d58e03f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
    ),
    new Lanche(
      'X-BACON',
      'Muitas carnes, com pão, queijo, salada e tudo que tem geralmente em um lanche.',
      'https://images.unsplash.com/photo-1598182198871-d3f4ab4fd181?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    ),
  ];

  getLanches() {
    return this.lanches.slice();
  }
}

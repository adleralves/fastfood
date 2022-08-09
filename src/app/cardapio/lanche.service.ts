import { Lanche } from './lanche.model';

export class LancheService {
  lanches: Lanche[] = [
    new Lanche(
      1,
      'Burger V',
      'Muitas carnes, com pão, queijo, salada e tudo que tem geralmente em um lanche.',
      'https://images.unsplash.com/photo-1605789538467-f715d58e03f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      27.90
    ),
    new Lanche(
      2,
      'Burger W',
      'Muitas carnes, com pão, queijo, salada e tudo que tem geralmente em um lanche.',
      'https://images.unsplash.com/photo-1598182198871-d3f4ab4fd181?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      32.50
    ),
    new Lanche(
      3,
      'Burger Y',
      'Muitas carnes, com pão, queijo, salada e tudo que tem geralmente em um lanche.',
      'https://images.unsplash.com/photo-1584178639036-613ba57e5e39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      29.50,
    )
  ];

  getLanches() {
    return this.lanches.slice();
  }

  addLanche() {

  }

  delLanche() {

  }
}

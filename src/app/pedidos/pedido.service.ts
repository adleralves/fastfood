import { Injectable } from '@angular/core';
import { Pedido } from './pedido.model';

@Injectable()
export class PedidoService {

  pedidos: Pedido[] = [
    new Pedido(
      1,
      'adler',
      'pronto'
    ),
    new Pedido(
      2,
      'jamily',
      'preparando'
    ),
    new Pedido(
      3,
      'bruno',
      'nem fiz'
    )
  ];

    getPedidos() {
      return this.pedidos.slice();
    }
}



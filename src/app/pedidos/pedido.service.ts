import { Cliente } from './../carrinho/cliente/cliente.model';
import { CarrinhoService } from './../carrinho/carrinho.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from './pedido.model';

@Injectable()
export class PedidoService {

  constructor(private httpClient: HttpClient,
    private carrinhoService: CarrinhoService) { }

    addCliente(cliente: Cliente) {

    }

    getPedidos() {
    //  return this.pedidos.slice();
    }
}



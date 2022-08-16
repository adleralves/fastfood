import { CarrinhoService } from './../carrinho/carrinho.service';
import { Carrinho } from './../carrinho/carrinho.model';
import { Pedido } from './pedido.model';
import { Component, OnInit } from '@angular/core';
import { PedidoService } from './pedido.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  pedidos: Pedido;
  carrinho: Carrinho[];

  constructor(private pedidoService: PedidoService,
    private carrinhoService: CarrinhoService) {
    this.pedidos = this.pedidoService.getPedido();
    this.carrinho = this.carrinhoService.getCarrinho();
    console.log(this.pedidos);
  }

  ngOnInit(): void {
  }

}

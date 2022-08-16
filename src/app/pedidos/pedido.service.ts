import { Cliente } from './../carrinho/cliente/cliente.model';
import { CarrinhoService } from './../carrinho/carrinho.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from './pedido.model';

@Injectable()
export class PedidoService {

  pedidoId;
  pedido: Pedido;
  cliente: Cliente;

  constructor(private httpClient: HttpClient,
    private carrinhoService: CarrinhoService) { }

    addCliente(cliente: Cliente) {
      this.pedido = new Pedido(cliente,this.carrinhoService.getCarrinho())
      console.log(this.pedido);

          this.httpClient.post<any>('pedido', this.pedido).subscribe(
          data => {
              this.pedidoId = data.id;
              this.pedido.status = data.status
              this.pedido.dataHoraPedido = data.data_hora_pedido
              this.pedido.dataHoraEntrega = data.data_hora_Entrega
          }

      );
    }

    getPedido() {
      return this.pedido;
    }
}



import { Pedido } from './pedido.model';
import { Component, OnInit } from '@angular/core';
import { PedidoService } from './pedido.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  pedidos: Pedido[] = [];
  dataSource: Pedido;

  displayedColumns: string[] = ['id', 'cliente', 'obs'];
  constructor(private pedidoService: PedidoService) {
    this.pedidos = this.pedidoService.getPedidos();
    console.log(this.pedidos);
  }

  ngOnInit(): void {
  }

}

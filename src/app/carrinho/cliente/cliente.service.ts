import { Cliente } from './cliente.model';
import { PedidoService } from './../../pedidos/pedido.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ClienteService {
  constructor(private httpClient :HttpClient,
    private pedidoService: PedidoService) { }

    onAddCliente(cliente: Cliente) {
        console.log(cliente);
        this.httpClient.post<any>('clientes', cliente).subscribe(
          data => {
            cliente.id = data.id
            console.log(cliente.id)
            this.pedidoService.addCliente(cliente);
          }
        )
    }
}

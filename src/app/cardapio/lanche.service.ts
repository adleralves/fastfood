import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarrinhoService } from '../carrinho/carrinho.service';
import { Lanche } from './lanche.model';

@Injectable({
  providedIn: 'root'
})
export class LancheService {
  lanche: Lanche[] = [];

  constructor(private carrinhoService: CarrinhoService,
    private httpClient: HttpClient) {
  }

  getLanches() {
    return this.httpClient.get<Lanche[]>('produto');
  }

  addCarrinho(lanche: Lanche) {
    return this.carrinhoService.recebeLanche(lanche);
  }
}

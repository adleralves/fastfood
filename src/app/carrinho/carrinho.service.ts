import { Lanche } from './../cardapio/lanche.model';
import { Carrinho } from './carrinho.model';

export class CarrinhoService {
  carrinhos: Carrinho[] = [];
  carrinho: Carrinho;

  recebeLanche(lanche: Lanche) {
    let teste = false;
    this.carrinho = new Carrinho(1, lanche, 1, lanche.valorUnitario, '');
    const existeNoCarrinho = this.carrinhos.find((itemCarrinho) => itemCarrinho.lanche.id === this.carrinho.lanche.id);
    if (!existeNoCarrinho) {
      this.carrinhos.push(this.carrinho);
    } else {
      alert('Pedido já adicionado!');
    }
  }

  getCarrinho() {
    return this.carrinhos.slice();
  }
}

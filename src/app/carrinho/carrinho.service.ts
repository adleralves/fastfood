import { Lanche } from './../cardapio/lanche.model';
import { Carrinho } from './carrinho.model';

export class CarrinhoService {

  carrinhos: Carrinho[] = [];
  carrinho: Carrinho;

  recebeLanche(lanche: Lanche) {
    this.carrinho = new Carrinho(1, lanche, 1, lanche.valorUnit, '');
    const existeNoCarrinho = this.carrinhos.find((itemCarrinho) => itemCarrinho.lanche.id === this.carrinho.lanche.id);
    if (!existeNoCarrinho) {
      this.carrinhos.push(this.carrinho);
    } else {
      alert('MINECRAFT');
    }
  }

  getCarrinho() {
    return this.carrinhos.slice();
  }
}

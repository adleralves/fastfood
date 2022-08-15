import { Lanche } from './../cardapio/lanche.model';

export class Carrinho {
  public id: number;
  public lanche: Lanche;
  public quantidade: number;
  public valorUnitario: number;
  public observacao: string;

  constructor(id: number, lanche: Lanche, quantidade: number, valorUnitario: number, observacao: string) {
    this.id = id;
    this.lanche = lanche;
    this.quantidade = quantidade;
    this.valorUnitario = valorUnitario;
    this.observacao = observacao;
  }
}

import { Lanche } from './../cardapio/lanche.model';

export class Carrinho {
  public id: number;
  public lanche: Lanche;
  public quantidade: number;
  public valorUnit: number;
  public observacao: string;

  constructor(id: number, lanche: Lanche, quantidade: number, valorUnit: number, observacao: string) {
    this.id = id;
    this.lanche = lanche;
    this.quantidade = quantidade;
    this.valorUnit = valorUnit;
    this.observacao = observacao;
  }
}

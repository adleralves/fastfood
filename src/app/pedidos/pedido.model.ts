export class Pedido {
  public cliente: any;
  public carrinho: any;
  public status: number;
  public dataHoraPedido: string;
  public dataHoraEntrega: string;

  constructor(cliente: any, carrinho: any) {
    this.cliente = cliente;
    this.carrinho = carrinho;
  }

}

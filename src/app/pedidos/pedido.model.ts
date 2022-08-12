export class Pedido {
  public id: number;
  public cliente: string;
  public obs: string;

  constructor(id: number, cliente: string, obs: string) {
    this.id = id;
    this.cliente = cliente;
    this.obs = obs;
  }

}

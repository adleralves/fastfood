export class Lanche {
  public id: number;
  public nome: string;
  public descricao: string;
  // public imagemURL: string;
  public valorUnitario: number;

  constructor(id: number, nome: string, desc: string, valorUnitario: number) {
    this.id = id;
    this.nome = nome;
    this.descricao = desc;
    // this.imagemURL = imagemURL;
    this.valorUnitario = valorUnitario;
  }
}

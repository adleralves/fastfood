export class Lanche {
  public id: number;
  public nome: string;
  public descricao: string;
  public imagemURL: string;
  public valorUnit: number;

  constructor(id: number, nome: string, desc: string, imagemURL: string, valorUnit: number) {
    this.id = id;
    this.nome = nome;
    this.descricao = desc;
    this.imagemURL = imagemURL;
    this.valorUnit = valorUnit;
  }
}

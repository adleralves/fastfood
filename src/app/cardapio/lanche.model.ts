export class Lanche {
  public id: number;
  public nome: string;
  public descricao: string;
  public imagemURL: string;
  public valor: number;

  constructor(id: number, nome: string, desc: string, imagem: string, valor: number) {
    this.id = id;
    this.nome = nome;
    this.descricao = desc;
    this.imagemURL = imagem;
    this.valor = valor;
  }
}

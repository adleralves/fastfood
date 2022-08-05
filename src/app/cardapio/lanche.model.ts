export class Lanche {
  public nome: string;
  public descricao: string;
  public imagemURL: string;
  public valor: number;

  constructor(nome: string, desc: string, imagem: string, valor: number) {
    this.nome = nome;
    this.descricao = desc;
    this.imagemURL = imagem;
    this.valor = valor;
  }
}

export class Lanche {
  public nome: string;
  public descricao: string;
  public imagemURL: string;

  constructor(nome: string, desc: string, imagem: string) {
      this.nome = nome;
      this.descricao = desc;
      this.imagemURL = imagem;
  }
}

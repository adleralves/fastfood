export class Cliente{
  public id: number;
  public nome: string;
  public endereco: string;
  public bairro: string;

  constructor(id: number, nome: string, endereco: string, bairro: string) {
    this.id = id;
    this.nome = nome;
    this.endereco = endereco;
    this.bairro = bairro;
  }
}



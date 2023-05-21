export class Empregado {
  private nome: string;
  private horas: number;
  private valorPorHora: number;

  constructor(nome: string, horas: number, valorPorHora: number){
    this.nome = nome;
    this.horas = horas;
    this.valorPorHora = valorPorHora
  }

  public pagamento() : number {
    return this.horas*this.valorPorHora
  }

  public getNome() : string {
    return this.nome;
  }

  public getHoras() : number {
    return this.horas;
  }

  public getValorPorHora() : number {
    return this.valorPorHora;
  }

  public toString(): string {
    return "Nome: " + this.getNome() + ", horas trabalhadas: " + this.getHoras() + ", valor por hora: " + this.getValorPorHora();
  }
}
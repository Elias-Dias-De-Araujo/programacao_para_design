import { Empregado } from "./Empregado";

export class Terceirizado extends Empregado {
    private despesasAdicionais: number;
  
    constructor(nome: string, horas: number, valorPorHora: number, despesasAdicionais: number){
      super(nome, horas, valorPorHora);
      this.despesasAdicionais = despesasAdicionais;
			
		}
  
    public pagamento() : number {
			const pag = this.getHoras()*this.getValorPorHora();
      return (pag + (this.despesasAdicionais * (110/100)) )
    }
  
    public toString(): string {
      return "Nome: " + this.getNome() + ", horas trabalhadas: " + this.getHoras() + ", valor por hora: " + this.getValorPorHora() + ", Despesa adicional: " + this.despesasAdicionais
    }
  }
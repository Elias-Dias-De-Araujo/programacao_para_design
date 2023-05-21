import { Empregado } from "./Empregado";

export class Empresa {
    private empregados: Empregado[];

		constructor() {
			this.empregados = []
		}
  
    public adicionaEmpregado(empregado: Empregado) : void {
      this.empregados.push(empregado)
    }
  
    public mostraEmpregados(): string {
			var res = "Empresa:\n" ;
			this.empregados.forEach(element => {
				res += element.toString() + "\n"
			});

			return res;
    }

    public calculaFolha() : string{
			var folha = 0;
			this.empregados.map((e) => {
				folha += e.pagamento();
			})

			return "Folha de pagamento: " + folha;
    }
  }
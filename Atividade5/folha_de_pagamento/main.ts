import { Empregado } from "./Empregado";
import { Empresa } from "./Empresa";
import { Terceirizado } from "./Terceirizado";

const empresa = new Empresa();

empresa.adicionaEmpregado(new Empregado("wladimir", 40, 40))
empresa.adicionaEmpregado(new Empregado("jose", 40, 100))
empresa.adicionaEmpregado(new Empregado("manoel", 20, 80))
empresa.adicionaEmpregado(new Terceirizado("joaquim", 8, 100, 200))

console.log(empresa.mostraEmpregados());
console.log(empresa.calculaFolha());
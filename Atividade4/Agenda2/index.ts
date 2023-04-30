import { Agenda } from "./Agenda";
import { Fone } from "./Fone";

const agenda = new Agenda();


// case adicionando em lote
agenda.addContact('eva', [new Fone('oio', '8585'), new Fone('cla', '9999')]);
agenda.addContact('ana', [new Fone('tim', '3434')]);
agenda.addContact('bia', [new Fone('viv', '5454')]);

// como ana já existe, não crie um novo contato
// adicione os telefones ao contato existente
agenda.addContact('ana', [new Fone('cas', '4567'), new Fone('oio', '8754')]);

console.log(agenda.toString());


//#__case removendo contato
agenda.rmContact("bia");
console.log(agenda.toString());

agenda.addContact('ava', [new Fone('tim', '5454')]);
agenda.addContact('rui', [new Fone('viv', '2222'), new Fone('oio', '9991')]);
agenda.addContact('zac', [new Fone('rec', '3131')]);

console.log(agenda.toString());

//#__case busca por padrao
agenda.search("va");
agenda.search("999");
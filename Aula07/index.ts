import { Agenda } from "./Class/Agenda2";
import { Contact } from "./Class/Agenda2/Contact";
import { Fone } from "./Class/Agenda2/Fone";

const contactOne = new Contact('May', [new Fone('oi', '(85)12345678'), new Fone('tim', '(85)12345678')]);
const contactTwo = new Contact('Lton', [new Fone('oi', '(85)333')]);
const contactThree = new Contact('May', [new Fone('claro', '(85)12345678')]);
const contactFour = new Contact('Rafael', [new Fone('claro', '(85)12345678')]);
const contactFive = new Contact('Elias', [new Fone('oi', '(85)333')]);
const agenda = new Agenda();

// case adicionando contatos
agenda.addContact(contactOne.getName(), contactOne);
agenda.addContact(contactTwo.getName(), contactTwo);
agenda.addContact(contactFour.getName(), contactFour);
agenda.addContact(contactFive.getName(), contactFive);
agenda.toShow();
console.log('\n');

//case adicinando um contacto que já existe com outro nome
agenda.addContact(contactThree.getName(), contactThree);
agenda.toShow();
console.log('\n');

//case removendo telefone
agenda.findContact(contactOne)?.rmFone(0);
agenda.toShow();
console.log('\n');

// case removendo contato
agenda.rmContact(contactFive.getName());
agenda.toShow();
console.log('\n');

// case busca por padrao
console.log('---------BUSCANDO POR MA---------');
agenda.search('ma');
console.log('\n');
console.log('---------BUSCANDO POR 85---------');
agenda.search('85');
console.log('\n');
console.log('---------BUSCANDO POR 333---------');
agenda.search('333');
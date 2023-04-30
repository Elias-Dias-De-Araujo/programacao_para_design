import { Agenda } from "./Agenda";
import { Fone } from "./Fone";

const agenda = new Agenda();

// case iniciando agenda
agenda.addContact('eva', [new Fone('oi', '8585'), new Fone('claro', '9999')]);
agenda.addContact('ana', [new Fone('tim', '3434')]);
agenda.addContact('ana', [new Fone('casa', '5454'), new Fone('oi', '8754')]);
agenda.addContact('bia', [new Fone('vivo', '5454')]);
agenda.addContact('rui', [new Fone('casa', '3233')]);
agenda.addContact('zac', [new Fone('fixo', '3131')]);

console.log(agenda.toString());

// case favoritando
agenda.star("eva", true);
agenda.star("ana", true);
agenda.star("ana", true);
agenda.star("zac", true);

console.log(agenda.toString());

// case lista de favoritos
agenda.getStarred();

// case removendo contato
agenda.rmContact("zac");
console.log(agenda.toString());
agenda.getStarred();

// case desfavoritando
agenda.star("ana", false);
agenda.getStarred();
console.log(agenda.toString());
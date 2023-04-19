import Motocycle from "./motocycle";
import Person from "./person";

function main() {

    // case subindo e buzinando

    const myMoto = new Motocycle(1);
    console.log(myMoto.toString());

    // case subindo
    myMoto.insertPerson(new Person("marcos", 4));
    console.log(myMoto.toString());

    // case ocupada
    myMoto.insertPerson(new Person("marisa", 2));
    console.log(myMoto.toString());

    // case subindo2
    const myMoto1 = new Motocycle(5);
    console.log(myMoto1.toString());
    myMoto1.insertPerson(new Person("marcos", 4));
    console.log(myMoto1.toString());

    // case subindo e trocando
    const myMoto2 = new Motocycle(7);
    myMoto2.insertPerson(new Person("heitor", 6));
    console.log(myMoto2.toString());
    console.log(myMoto2.remove());

    // case empty
    console.log(myMoto2.remove());

    // case replace
    myMoto2.insertPerson(new Person("suzana", 8));
    console.log(myMoto2.toString());

    // case no time
    const myMoto3 = new Motocycle(7);
    myMoto3.buyTime(30);
    console.log(myMoto3.toString());
    myMoto3.buyTime(10);
    console.log(myMoto3.toString());

    // case buy time
    const myMoto4 = new Motocycle(7);
    myMoto4.insertPerson(new Person("suzana", 8));
    myMoto4.drive(10);
    myMoto4.buyTime(50);

    // case empty
    console.log(myMoto2.remove());
    myMoto4.drive(10);
    myMoto4.insertPerson(new Person("suzana", 8));

    // case driving
    myMoto4.drive(30);
    console.log(myMoto4.toString());

    // case limite de idade
    const myMoto5 = new Motocycle(7);
    myMoto5.insertPerson(new Person("suzana", 11));
    myMoto5.buyTime(20);
    myMoto5.drive(20);

    // case tempo esgotado
    const myMoto6 = new Motocycle(7);
    myMoto6.insertPerson(new Person("suzana", 8));
    myMoto6.buyTime(5);
    myMoto6.drive(20);

    // case buzinando
    const myMoto7 = new Motocycle(7);
    myMoto7.insertPerson(new Person("suzana", 8));
    console.log(myMoto7.honk());


}

main();
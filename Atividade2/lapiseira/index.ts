import Grafite from "./grafite";
import Pencil from "./pencil";

function main() {
  const myPencil = new Pencil(0.3);
  myPencil.insert(new Grafite(0.3, "2B", 50));
  console.log(myPencil.toString());
  myPencil.insert(new Grafite(0.3, "4B", 70));
  console.log(myPencil.toString());
  myPencil.remove();
  console.log(myPencil.toString());
  myPencil.insert(new Grafite(0.3, "4B", 70));
  console.log(myPencil.toString());
}

main();

import Pet from "./pet";

function main() {
  const myPet = new Pet(20, 10, 15);
  console.log(myPet.toString());

  const myPet1 = new Pet(10, 20, 50);
  console.log(myPet.toString());

  const myPet2 = new Pet(4, 4, 4);
  myPet2.play();
  myPet2.play();
  myPet2.play();
  myPet2.play();
  console.log(myPet2.toString());

}

main();
import Calculator from "./calculator";

function main() {
  // case iniciar mostrar e recarregar
  let myCalculator = new Calculator(5);
  console.log(myCalculator.toString());

  // case charge
  myCalculator.chargeBattery(3);
  console.log(myCalculator.toString());
  myCalculator.chargeBattery(1);
  console.log(myCalculator.toString());
  
  // case boundary
  myCalculator.chargeBattery(2);
  console.log(myCalculator.toString());

  // case reset
  let myCalculator1 = new Calculator(4);
  myCalculator1.chargeBattery(2);
  console.log(myCalculator1.toString());
  myCalculator1.chargeBattery(3);
  console.log(myCalculator1.toString());

  // case somando
  let myCalculator2 = new Calculator(2);
  myCalculator2.chargeBattery(2);
  myCalculator2.sum(4,3);
  console.log(myCalculator2.toString());

  // case gastando bateria
  myCalculator2.sum(2,3);
  console.log(myCalculator2.toString());

  // case sem bateria
  myCalculator2.sum(-4,-1);

  // case recarregando
  myCalculator2.chargeBattery(1);
  console.log(myCalculator2.toString());
  myCalculator2.sum(-4,-2);
  console.log(myCalculator2.toString());

  // case dividindo
  let myCalculator3 = new Calculator(3);
  myCalculator3.chargeBattery(3);
  myCalculator3.div(6,3);
  console.log(myCalculator3.toString());

  // case dividindo por zero
  myCalculator3.div(7,0);
  console.log(myCalculator3.toString());

  // case gastando bateria
  myCalculator3.div(7,2);
  myCalculator3.div(10,2);
  console.log(myCalculator3.toString());
}

main();
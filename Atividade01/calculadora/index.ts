import Calculator from "./calculator";

function main() {
  const myCalculator = new Calculator(5);
  myCalculator.chargeBattery(10);
  console.log(myCalculator.toString());
  myCalculator.sum(1, 2);
  console.log(myCalculator.toString());
  myCalculator.sub(1, 2);
  console.log(myCalculator.toString());
  myCalculator.mult(1, 2);
  console.log(myCalculator.toString());
  myCalculator.division(1, 2);
  console.log(myCalculator.toString());
}

/*
function main() {
  let chain = new Map();
  let ui: string[] = [];
  let calc = new Calculator(0);

  chain.set("show", () => puts("" + calc));
  chain.set("init", () => (calc = new Calculator(+ui[1])));
  chain.set("charge", () => calc.chargeBattery(+ui[1]));
  chain.set("sum", () => calc.sum(+ui[1], +ui[2]));
  chain.set("div", () => calc.division(+ui[1], +ui[2]));

  evaluate(chain, ui);
}

import { readFileSync } from "fs";

let __lines = readFileSync(0).toString().split("\n");
let input = () => {
  let a = __lines.shift();
  return a === undefined ? "" : a;
};
let write = (text: any) => process.stdout.write("" + text);
let puts = (text: any) => console.log(text);
function evaluate(chain: Map<string, Function>, param: string[]) {
  while (true) {
    let line = input();
    puts("$" + line);
    param.splice(0); //apagar tudo
    line.split(" ").forEach((x: string) => param.push(x));

    let cmd = param[0];
    if (cmd == "end") {
      return;
    } else if (chain.has(cmd)) {
      chain.get(cmd)!();
    } else {
      puts("fail: command not found");
    }
  }
}
*/

main();
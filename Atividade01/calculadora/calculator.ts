class Calculator {
  //todo
  batteryMax: number;
  battery: number;
  display: number;

  constructor(batteryMax: number) {
    this.battery = 0;
    this.display = 0;
    this.batteryMax = batteryMax;
  }

  chargeBattery(value: number) {
    this.battery += value;
    if (this.battery >= this.batteryMax) {
      this.battery = this.batteryMax;
    }
  }

  useBattery(): boolean {
    if (this.battery <= 0) {
      console.log("fail: bateria insuficiente");
      return false;
    } else {
      this.battery--;
      return true;
    }
  }

  sum(a: number, b: number) {
    if (this.useBattery()) {
      this.display = a + b;
    }
  }

  sub(a: number, b: number) {
    if (this.useBattery()) {
      this.display = a - b;
    }
  }

  mult(a: number, b: number) {
    if (this.useBattery()) {
      this.display = a * b;
    }
  }

  division(num: number, den: number) {
    if (this.useBattery()) {
      if (den != 0) {
        this.display = num / den;
      } else {
        console.log("fail: divisão por zero");
      }
    }
  }
  toString() {
    return (
      "display = " + this.display.toFixed(2) + ", battery = " + this.battery
    );
  }
}
export default Calculator;

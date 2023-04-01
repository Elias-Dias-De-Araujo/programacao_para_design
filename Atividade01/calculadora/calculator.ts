class Calculator {
  //todo
  private batteryMax: number;
  private battery: number;
  private display: number;

  constructor(batteryMax: number) {
    this.battery = 0;
    this.display = 0;
    this.batteryMax = batteryMax;
  }

  public getBatteryMax(): number {
    return this.batteryMax;
  }
  public getBattery(): number {
    return this.battery;
  }
  public getDisplay(): number {
    return this.display;
  }
  public setBatteryMax(value: number): void {
    this.batteryMax = value;
  }
  public setBattery(value: number): void {
    this.battery = value;
  }
  public setDisplay(value: number): void {
    this.display = value;
  }

  chargeBattery(value: number) {
    this.setBattery(this.getBattery() + value);
    if (this.getBattery() >= this.getBatteryMax()) {
      this.setBattery(this.getBatteryMax());
    }
  }

  useBattery(): boolean {
    if (this.getBattery() <= 0) {
      console.log("fail: bateria insuficiente");
      return false;
    } else {
      this.setBattery(this.getBattery() - 1);
      return true;
    }
  }

  sum(a: number, b: number) {
    if (this.useBattery()) {
      this.setDisplay(a + b);
    }
  }

  sub(a: number, b: number) {
    if (this.useBattery()) {
      this.setDisplay(a - b);
    }
  }

  mult(a: number, b: number) {
    if (this.useBattery()) {
      this.setDisplay(a * b);
    }
  }

  div(num: number, den: number) {
    if (this.useBattery()) {
      if (den != 0) {
        this.setDisplay(num / den);
      } else {
        console.log("fail: divisão por zero");
      }
    }
  }
  toString() {
    return (
      "display = " +
      this.display.toFixed(2) +
      ", battery = " +
      this.getBattery()
    );
  }
}
export default Calculator;

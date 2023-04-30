export class Fone {
  private id: string;
  private number: string;

  constructor(id: string, number: string){
    this.id = id;
    this.number = number;
  }

  public getNumber(): string {
    return this.number;
  }

  public getID(): string {
    return this.id;
  }

  public setNumber(number: string): void {
    this.number = number;
  }

  public setID(id: string): void {
    this.id = id;
  }

  public toShow(): string {
    return (`${this.getID()}:${this.getNumber()}`);
  }

  public static validate(number: string): boolean {
    let isValid = true;
    for (let count = 0; count < number.length; count++) {
      if (
        (count === 0 && number[0] !== "(") ||
        (count === 3 && number[3] !== ")")
      ) {
        isValid = false;
        break;
      }

      if (count === 0 || count === 3) continue;

      if (
        number[count] !== "0" &&
        number[count] !== "1" &&
        number[count] !== "2" &&
        number[count] !== "3" &&
        number[count] !== "4" &&
        number[count] !== "5" &&
        number[count] !== "6" &&
        number[count] !== "7" &&
        number[count] !== "8" &&
        number[count] !== "9"
      ) {
        isValid = false;
        break;
      }
    }
    isValid
      ? console.log("Número é valido")
      : console.log("Número não é valido");
    return isValid;
  }

  public isValid(): boolean {
    return Fone.validate(this.number);
  }
}
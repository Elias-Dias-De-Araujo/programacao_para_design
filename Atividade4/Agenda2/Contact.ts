import { Fone } from "./Fone";

export class Contact {
  private fones: Fone[];
  private name: string;

  constructor(name: string, fones: Fone[]){
    this.name = name;
    this.fones = fones;
  }

  public toString(): string {
    var res = " ";
    for (let index = 0; index < this.getFones().length; index++) {
      res += `[${index}:${this.getFones()[index].toString()}] `;
      
    }
    return `- ${this.getName()}${res}`;
  }

  public addFone(fone: Fone) {
    this.getFones().push(fone);
    this.setFones(this.getFones());
  }

  public rmFone(index: number): void {
    this.getFones().splice(index, 1);
    this.setFones(this.getFones());
    return;
  }

  public getName(): string {
    return this.name;
  }

  public getFones(): Fone[] {
    return this.fones;
  }

  public setName(name: string): void{
    this.name = name;
  }

  public setFones(fones: Fone[]): void{
    this.fones = fones;
  }
}
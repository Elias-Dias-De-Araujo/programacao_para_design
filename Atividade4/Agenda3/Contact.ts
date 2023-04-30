import { Fone } from "./Fone";

export class Contact {
  protected prefix: string = "-";
  private fones: Fone[];
  private name: string;
  private star: boolean = false;

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

  public getPrefix(): string {
    return this.prefix;
  }
  
  public getStar(): boolean {
    return this.star;
  }

  public setName(name: string): void{
    this.name = name;
  }

  public setFones(fones: Fone[]): void{
    this.fones = fones;
  }

  public setStar(star: boolean): void{
    if(star) {
      this.prefix = "@";
    }else {
      this.prefix = "-";
    }
    this.star = star;
  }
}
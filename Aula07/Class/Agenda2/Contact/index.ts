import { Fone } from "../Fone";

export class Contact {
  private name: string;
  private fones: Fone[];

  constructor(name: string, fones: Fone[]){
    this.name = name;
    this.fones = fones;
  }

  public setName(name: string): void{
    this.name = name;
  }

  public setFone(fones: Fone[]): void{
    this.fones = fones;
  }

  public getName(): string {
    return this.name;
  }

  public getFones(): Fone[] {
    return this.fones;
  }

  public toString(): string {
    var phonesResult = '';
    const phones = this.getFones();

    for(var i = 0; i < phones.length; i++){
      phonesResult += ` [${i}:${phones[i].toShow()}]`;
    }

    return `- ${this.getName()}${phonesResult}`;
  }

  public addFone(fone: Fone) {
    const listFones = this.getFones();
    listFones.push(fone);
    this.setFone(listFones);
  }

  public rmFone(index: number): void {
    const listFones = this.getFones();
    if(index >= 0 && listFones.length > index) {
      listFones.splice(index, 1);
      this.setFone(listFones);
      return;
    }
  }
}
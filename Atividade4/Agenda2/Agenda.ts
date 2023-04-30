import { Fone } from "./Fone";
import { Contact } from "./Contact";

export class Agenda {
  private contacts:Contact[];

  public findPosByName(name:string) : number {
    for (let index = 0; index < this.getContacts().length; index++) {
      if(this.getContacts()[index].getName() == name) {
        return index;
      }
    }
    return -1;
  }

  constructor(){
    this.contacts = [];
  }

  public toString(): string {
    var res = "";
    for(let index = 0; index < this.getContacts().length; index++) {
      res += this.getContacts()[index].toString() + "\n";
    }
    return res;
  }

  public addContact(name:string, fones:Fone[]) {
    const index = this.findPosByName(name);
    if(index != -1) {
      for (let index1 = 0; index1 < fones.length; index1++) {
        this.getContacts()[index].addFone(fones[index1]);
      }
    }else {
      this.getContacts().push(new Contact(name, fones));
    }
  }

  public findContact(name:string): Contact | null {
    const index = this.findPosByName(name); 

    if(index == -1) {
      return null;
    }

    return this.getContacts()[index];

  }

  public rmContact(name:string) : void {
    const index = this.findPosByName(name); 

    if(index == -1) {
      return;
    }

    this.getContacts().splice(index, 1);
    
  }

  public search(pattern:string){
    const searchList = this.getContacts().filter((currentContact) => currentContact.getName().toLowerCase().includes(pattern.toLowerCase()));

    for(let c of this.getContacts()) {
      for(let cFone of c.getFones()) {
        if(cFone.getNumber().includes(pattern)) {
          searchList.push(c);
          break;
        }
      }
    }
    
    for(let index = 0; index < searchList.length; index++) {
      console.log(searchList[index].toString());
    }
  }

  public getContacts(): Contact[] {
    return this.contacts;
  }
}
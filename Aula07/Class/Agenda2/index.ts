import { Contact } from "./Contact";

export class Agenda {
  private contacts: Contact[] = [];
  constructor(){}

  public setContact(contact: Contact[]) {
    this.contacts = contact;
  }

  public getContacts(): Contact[] {
    return this.contacts;
  }

  private findPosByName(name: string): number {
    const allContacts = this.getContacts();

    for(let index = 0; index < allContacts.length; index++) {
      if(allContacts[index].getName() === name){
        return index;
      }
    }
    return -1;
  }

  public addContact(name: string, contact: Contact) {
    if(!!this.findContact(contact)) {
      const allContacts = this.getContacts();
      for(let index = 0; index < allContacts.length; index++) {
        if(allContacts[index].getName() === name) {
          const allFones = contact.getFones();
          for(let indexFones = 0; indexFones < allFones.length; indexFones++) {
            allContacts[index].addFone(allFones[indexFones]);
          }
        }
      }
      return;
    }
    
    const allContacts = this.getContacts();
    allContacts.push(contact);
    this.setContact(allContacts);
  }

  public findContact(contact: Contact): Contact | null {
    const positionArray = this.findPosByName(contact.getName());

    if(positionArray > -1) {
      const allContacts = this.getContacts();
      return allContacts[positionArray]
    }

    return null;
  }

  public rmContact(name: string) {
    const allContacts = this.getContacts();
    const indexContact = allContacts.findIndex((currentContact) => currentContact.getName() === name);
    if(indexContact > -1) {
      allContacts.splice(indexContact, 1);
      this.setContact(allContacts);
    }
  }

  public search(pattern: string){
    const allContacts = this.getContacts();
    const searchedArray = allContacts.filter((currentContact) => currentContact.getName().toLowerCase().includes(pattern.toLowerCase()));

    for(let currentContact of allContacts) {
      const listFones = currentContact.getFones();

      for(let currentFones of listFones) {
        if(currentFones.getNumber().includes(pattern)) {
          searchedArray.push(currentContact);
          break;
        }
      }
    }
    
    for(let index = 0; index < searchedArray.length; index++) {
      console.log(searchedArray[index].toString());
    }
  }

  public toShow(): void {
    const allContacts = this.getContacts();

    for(let index = 0; index < allContacts.length; index++) {
      console.log(allContacts[index].toString());
    }
  }
}
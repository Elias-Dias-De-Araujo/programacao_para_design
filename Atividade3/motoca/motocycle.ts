import Person from "./person";

class Motocycle { //todo
    power:number;
    time: number;
    person: Person | null;

    constructor(power : number) { //todo
        this.power = power;
        this.time = 0;
        this.person = null;
    }

    honk(): string { //todo
        if(this.getPerson() != null) {
            var phrase = "P";
            for (let i = 0; i < this.getPower(); i++) {
                phrase += "e";
            }
            phrase += "m";

            return phrase;
            
        }

        return "fail: empty motorcycle";
    }

    insertPerson(p: Person): boolean { //todo
        if(this.getPerson() == null) {
            this.person = p;
            return true;
        }
        console.log("fail: busy motorcycle");
        return false;
    }

    remove() : Person | null { //todo
        if(this.getPerson() != null) {
            const aux = this.getPerson();
            this.setPerson(null);
            return aux;
        }
        console.log("fail: empty motocycle");
        return null;
    }

    drive(time: number): void { //todo
        if(this.person != null) {
            if(this.person.getAge() <= 10) {
                if(this.getTime() > 0) {
                    if(this.getTime() < time) {
                        console.log("fail: time finished after " + (this.getTime()) + " minutes");
                        this.time = 0;
                    }else {
                        this.time = this.getTime() - time;
                    }
                }else{
                    console.log("fail: buy time first");
                }
            }else {
                console.log("fail: too old to drive");
            }
        }else {
            console.log("fail: empty motocycle");
        }

        
    }

    buyTime(value: number) : void { //todo
        this.time = this.getTime() + value;
    }

    public toString(): string {
        return `power:${this.power}, time:${this.time}, person:` +
            "(" +  (this.person === null ? "empty" : "" + this.person) + ")";
    }

    public getPerson() : Person | null {
        return this.person;
    }

    public setPerson(p : Person | null) {
        this.person = p;
    }

    public getPower() : number {
        return this.power;
    }

    public getTime() : number {
        return this.time;
    }
}

export default Motocycle;
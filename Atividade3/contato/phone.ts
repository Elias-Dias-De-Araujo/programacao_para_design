class Phone { //todo
    private id:string;
    private number:string;

    public constructor(id:string, number:string){
        this.id = id;
        this.number = number;
    }

    public isValid() : boolean{
        return Phone.validate(this.number)
    }

    public static validate(number : string) : boolean {
        const RegExpCond = new RegExp("^[(]?[0-9]{2}[)]?[9]?[0-9]*$");
        return RegExpCond.test(number);
    }

    public tostring() : string {
        return this.getId() + ":" + this.getNumber();
    }

    public getId() : string {
        return this.id;
    }

    public getNumber() : string {
        return this.number;
    }

    public setId(id:string) : void {
        this.id = id
    }

    public setNumber(number:string) : void {
        this.number = number
    }
}

export default Phone;

class Person { //todo
    private age: number;
    private name: string;

    public constructor(name: string, age: number) { //todo
        this.age = age;
        this.name = name;
    }
    public getAge(): number { //todo
        return this.age;
    }
    public getname(): string { //todo
        return this.name;
    }
    public toString(): string { //todo
        return this.getname()+ ":" + this.getAge();
    }
}

export default Person;
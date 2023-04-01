class Pet { //todo
    private energyMax: number;
    private hungryMax: number;
    private cleanMax: number;

    private energy: number;
    private hungry: number;
    private clean: number;

    private diamonds: number;
    private age: number;
    private alive: boolean;

    public constructor(energy: number, hungry: number, clean: number) {
        this.energyMax = energy;
        this.hungryMax = hungry;
        this.cleanMax = clean;

        this.energy = energy;
        this.hungry = hungry;
        this.clean = clean;

        this.diamonds = 0;
        this.age = 0;
        this.alive = true;
    }
    public setEnergy(value: number) { //todo
        this.energy = value;
    }

    public setHungry(value: number) { //todo
        this.hungry = value;
    }

    public setClean(value: number) { //todo
        this.clean = value;
    }

    private testAlive(): boolean { //todo
        if(this.getAlive()) {
            return true;
        }else {
            return false;
        }
    }
    public toString(): string {
        return  `E:${this.energy}/${this.energyMax}` 
            + `, S:${this.hungry}/${this.hungryMax}` 
            + `, L:${this.clean}/${this.cleanMax}` 
            + `, D:${this.diamonds}, I:${this.age}`;
    }

    public play() {
        if(this.testAlive()) {
            this.setClean(this.getClean() - 2);
            this.setEnergy(this.getEnergy() - 2);
            this.setHungry(this.getHungry() - 2);
            this.diamonds++;
            this.age++;
            this.testAtributes();
        }
    }
    public shower() { //todo
        if(this.testAlive()) {
            this.setClean(this.getClean() + 2);
            this.setEnergy(this.getEnergy() - 1);
            this.setHungry(this.getHungry() - 1);
            this.age++;
            this.testAtributes();
        }
    }
    public eat() { //todo
        if(this.testAlive()) {
            this.setClean(this.getClean() - 1);
            this.setEnergy(this.getEnergy() - 1);
            this.setHungry(this.getHungry() + 1);
            this.age++;
            this.testAtributes();
        }
    }
    public sleep() { //todo
        if(this.testAlive()) {
            this.setClean(this.getClean() - 1);
            this.setEnergy(this.getEnergy() + 3);
            this.setHungry(this.getHungry() - 1);
            this.age++;
            this.testAtributes();
        }
    }
    public getClean() {
        return this.clean;
    }
    public getHungry() {
        return this.hungry;
    }
    public getEnergy() {
        return this.energy;
    }
    public getDiamonds() {
        return this.diamonds;
    }
    public getAge() {
        return this.age;
    }
    public getAlive() {
        return this.alive;
    }
    
    public testAtributes() {
        if(this.getHungry() <= 0) {
            console.log("pet morreu de fome");
            this.alive = false;
            return;
        }else if(this.getHungry() >= this.hungryMax) {
            this.setHungry(this.hungryMax);
            return;
        }

        if(this.getEnergy() <= 0) {
            console.log("pet morreu de cansaço");
            this.alive = false;
            return;
        }else if(this.getEnergy() >= this.energyMax) {
            this.setEnergy(this.energyMax);
            return;
        }

        if(this.getClean() <= 0) {
            console.log("pet morreu de sujeira");
            this.alive = false;
            return;
        }else if(this.getClean() >= this.cleanMax) {
            this.setClean(this.cleanMax);
            return;
        }
    }

}

export default Pet;

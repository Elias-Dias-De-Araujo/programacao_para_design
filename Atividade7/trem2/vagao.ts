import { Passageiro } from "./passageiro";

export abstract class Vagao {
    protected capacidade: number;
    protected cadeiras: (Passageiro | null)[];

    constructor(capacidade: number) {
        this.capacidade = capacidade;
        this.cadeiras = [];
    }

    public desembarcar(idPass: String) {
        var removed = false;
        this.cadeiras.forEach((e, i) => {
            if (e?.getId() == idPass) {
                this.cadeiras.splice(0, i);
                removed = true;
                return;
            }
        });

        return removed;
    }

    public getPassageiros(): (Passageiro | null)[] {
        return this.cadeiras;
    }
}

export class VagaoPassageiro extends Vagao {
    constructor(capacidade: number) {
        super(capacidade);
    }

    public embarcar(pass: Passageiro): boolean {
        if ((this.cadeiras.length = this.capacidade)) {
            return false;
        }
        this.cadeiras.push(pass);
        return true;
    }
}

export class VagaoCarga extends Vagao {
    private pesoMaximo: number;

    constructor(capacidade: number, pesoMaximo: number) {
        super(capacidade);
        this.pesoMaximo = pesoMaximo;
    }

    public embarcar(pass: Passageiro): boolean {
        if ((this.cadeiras.length = this.capacidade)) {
            return false;
        }
        this.cadeiras.push(pass);
        return true;
    }

    public getPesoMaximo(): number {
        return this.pesoMaximo;
    }
}

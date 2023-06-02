import { Passageiro } from "./passageiro";

export class Vagao {
    private cadeiras: (Passageiro | null)[];
    private capacidade: number;

    constructor(capacidade: number) {
        this.capacidade = capacidade;
        this.cadeiras = [];
    }

    public embarcar(pass: Passageiro): boolean {
        if ((this.cadeiras.length = this.capacidade)) {
            return false;
        }
        this.cadeiras.push(pass);
        return true;
    }

    public desembarcar(idPass: String): boolean {
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

    public exists(idPass: String): boolean {
        var exist = false;
        this.cadeiras.forEach((e, i) => {
            if (e?.getId() == idPass) {
                exist = true;
                return;
            }
        });

        return exist;
    }

    public getPassageiros(): (Passageiro | null)[] {
        return this.cadeiras;
    }
}

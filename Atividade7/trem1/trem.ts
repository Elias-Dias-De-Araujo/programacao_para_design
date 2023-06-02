import { Passageiro } from "./passageiro";
import { Vagao } from "./vagao";

export class Trem {
    private maxVagoes: number;
    private vagoes: Vagao[];

    constructor(maxVagoes: number) {
        this.maxVagoes = maxVagoes;
        this.vagoes = [];
    }

    public adicionarVagao(vagao: Vagao): boolean {
        if (this.vagoes.length == this.maxVagoes) return false;

        this.vagoes.push(vagao);
        return true;
    }

    public embarcar(pass: Passageiro): boolean {
        for (let i = 0; i < this.vagoes.length; i++) {
            if (this.vagoes[i].embarcar(pass)) {
                return true;
            }
        }

        return false;
    }

    public desembarcar(idPass: string) {
        var removed = false;
        this.vagoes.forEach((vagao) => {
            if (vagao.desembarcar(idPass)) {
                removed = true;
                return;
            }
        });

        return removed;
    }

    public exists(idPass: string): boolean {
        var exist = false;
        this.vagoes.forEach((vagao) => {
            if (vagao.exists(idPass)) {
                exist = true;
                return;
            }
        });

        return exist;
    }

    public getVagoes(): Vagao[] {
        return this.vagoes;
    }
}

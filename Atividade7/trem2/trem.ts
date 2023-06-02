import { PassageiroCarga, PassageiroPessoa } from "./passageiro";
import { Vagao, VagaoCarga, VagaoPassageiro } from "./vagao";

export class Trem {
    private maxVagoes: number;
    private vagoes: Vagao[];
    private vagoesPassageiro: VagaoPassageiro[];
    private vagoesCarga: VagaoCarga[];

    constructor(maxVagoes: number) {
        this.maxVagoes = maxVagoes;
        this.vagoes = [];
        this.vagoesPassageiro = [];
        this.vagoesCarga = [];
    }

    public adicionarVagaoPassageiro(vagao: VagaoPassageiro): boolean {
        if (this.vagoesPassageiro.length == this.maxVagoes) return false;

        this.vagoesPassageiro.push(vagao);
        return true;
    }

    public adicionarVagaoCarga(vagao: VagaoCarga): boolean {
        if (this.vagoesCarga.length == this.maxVagoes) return false;

        this.vagoesCarga.push(vagao);
        return true;
    }

    public embarcarPessoa(pass: PassageiroPessoa): boolean {
        for (let i = 0; i < this.vagoesPassageiro.length; i++) {
            if (this.vagoesPassageiro[i].embarcar(pass)) {
                return true;
            }
        }

        return false;
    }

    public embarcarCarga(pass: PassageiroCarga): boolean {
        for (let i = 0; i < this.vagoesCarga.length; i++) {
            if (this.vagoesCarga[i].embarcar(pass)) {
                return true;
            }
        }

        return false;
    }

    public desembarcar(idPass: string) {
        var removed = false;
        this.vagoesPassageiro.forEach((vagao) => {
            if (vagao.desembarcar(idPass)) {
                removed = true;
                return;
            }
        });

        this.vagoesCarga.forEach((vagao) => {
            if (vagao.desembarcar(idPass)) {
                removed = true;
                return;
            }
        });

        return removed;
    }

    public getVagoes(): Vagao[] {
        return this.vagoes;
    }

    public getVagoesPassageiro(): Vagao[] {
        return this.vagoesPassageiro;
    }

    public getVagoesCarga(): Vagao[] {
        return this.vagoesCarga;
    }
}

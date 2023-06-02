export abstract class Passageiro {
    private id: string;

    constructor(id: string) {
        this.id = id;
    }

    public getId(): string {
        return this.id;
    }
}

export class PassageiroPessoa extends Passageiro {
    private nome: string;

    constructor(id: string, nome: string) {
        super(id);
        this.nome = nome;
    }

    public getName(): string {
        return this.nome;
    }
}

export class PassageiroCarga extends Passageiro {
    private descricao: string;
    private peso: number;

    constructor(id: string, descricao: string, peso: number) {
        super(id);
        this.descricao = descricao;
        this.peso = peso;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public getPeso(): number {
        return this.peso;
    }
}

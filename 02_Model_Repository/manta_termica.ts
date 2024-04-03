import { Produto } from "./Principal";

export class Medicamento extends Produto{
    
    private _mantatérmica: string;

	constructor(id: number, nome: string, tipo: number, preco: number, manta: string) {
        super(id, nome, tipo, preco) // Atributos da Classe Produto
		this._mantatérmica = manta
	}


    /**
     * Getter generico
     * @return {string}
     */
	public get manta(): string {
		return this._mantatérmica;
	}

    /**
     * Setter generico
     * @param {string} value
     */
	public set manta(value: string) {
		this._mantatérmica = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log(`Manta Térmica: ${this._mantatérmica}`);
    }
}
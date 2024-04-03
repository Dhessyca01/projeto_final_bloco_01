import { Produto } from "./Principal";

export class Cosmetico extends Produto{
    
    private _mantaasfáltica: string;

	constructor(id: number, nome: string, tipo: number, preco: number, manta: string) {
        super(id, nome, tipo, preco) // Atributos da Classe Produto
		this._mantaasfáltica = manta;
	}


    /**
     * @return {string}
     */
	public get manta(): string {
		return this._mantaasfáltica;
	}

    /** 
     * @param {string} value
     */
	public set manta(value: string) {
		this._mantaasfáltica = value;
	}


    public visualizar(): void {
        super.visualizar();
        console.log(`Manta Asfáltica: ${this._mantaasfáltica}`);
    }
}
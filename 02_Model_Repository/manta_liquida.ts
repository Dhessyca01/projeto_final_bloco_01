import { Produto } from "./Principal";

export class Cosmetico extends Produto{
    
    private _mantaliquida: string;

	constructor(id: number, nome: string, tipo: number, preco: number, manta: string) {
        super(id, nome, tipo, preco) // Atributos da Classe Produto
		this._mantaliquida = manta;
	}


    /**
     * @return {string}
     */
	public get manta(): string {
		return this._mantaliquida;
	}

    /** 
     * @param {string} value
     */
	public set manta(value: string) {
		this._mantaliquida = value;
	}


    public visualizar(): void {
        super.visualizar();
        console.log(`Manta Asfáltica: ${this._mantaliquida}`);
    }
}
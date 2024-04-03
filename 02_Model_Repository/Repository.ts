import { Produto } from "./Principal";


export interface ProdutoRepository{

    // Métodos do CRUD ( Create, Read, Update, Delete)
    listarTodas(): void;
    procurarPorId(id: number): void;
    cadastrar(produto: Produto): void;
    atualizar(produto: Produto): void;
    deletar(id: number): void;
    
}
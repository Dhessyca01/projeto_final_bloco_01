import readlinesync = require("readline-sync");

import { colors } from "./src/útil/colors";
import { Produtocontroller } from "./src/03_Controller/Produtocontroller";
import { manta_asfaltica } from "./src/model/manta_asfaltica";
import { manta_liquida } from "./src/model/manta_liquida";
import { Produto } from "./src/model/Principal";


export function main() {


    let opcao, id, tipo, preco: number;
    let nome, mantaasfáltica, mantalíquida: string;
    let tipoProduto = ['Manta Líquida', 'Manta Asfáltica'];

    const produtoController : Produtocontroller = new Produtocontroller();


    produtoController.cadastrar(new manta_asfaltica(produtoController.gerarId(),
        "Manta Asfaltica 15 ", 1, 60.00, "Manta Asfaltica 45"));

    produtoController.cadastrar(new manta_liquida (produtoController.gerarId(),
    "Manta Líquida 5L ", 2, 100.00, "Manta Líquida 10L"));



    while (true) {

        console.log(colors.bg.yellowbright, colors.fg.gray,
            "*************************************************************");
        console.log("                                                     ");
        console.log("         SERVE BEM CONSTRUÇÃO E COMÉRCIO LTDA        ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Listar todos os produtos             ");
        console.log("            2 - Listar Produto Pelo ID              ");
        console.log("            3 - Cadastrar Produto                    ");
        console.log("            4 - Atualizar Produto                    ");
        console.log("            5 - Deletar Produto                      ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
            colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 0) {
            console.log(colors.fg.bluestrong,
                "\nServe Bem Construção e Comércio- Preço baixo é aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {

            case 1:
                console.log(colors.fg.blackstrong,
                    "\n\nListar todos os Produtos\n\n", colors.reset);

                    nome = readlinesync.question("Digite o Nome do Produto: ");

                    tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;
    
                    preco = readlinesync.questionFloat("Digite o preco: ");


                switch (tipo) {
                    case 1:
                        mantaasfáltica = readlinesync.question("Digite o tipo de Manta: ");
                        produtoController.cadastrar(new manta_asfaltica(produtoController.gerarId(),
                            nome, tipo, preco, mantaasfáltica));
                        break;

                        case 2:
                            mantalíquida = readlinesync.question("Digite o tipo de Manta: ");
                            produtoController.cadastrar(new manta_liquida(produtoController.gerarId(),
                                nome, tipo, preco, mantalíquida));
                            break;



            case 2:
                console.log(colors.fg.greenstrong,
                    "\n\nListar Produtos - por Id\n\n", colors.reset);

                    id = readlinesync.questionInt("Digite o Id do Produto: ");
                    produtoController.listarTodas();

                keyPress()
                break;

            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nCadastrar Produto\n\n", colors.reset);
                    
                    produtoController.listarTodas();

    
                keyPress()
                break;   

            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados do Produto\n\n", colors.reset);

                    id = readlinesync.questionInt("Digite o Id do Produto: ");
                    
                    let produto = produtoController.buscarNoArray(id);

                    if (produto !== null){

                        nome = readlinesync.question("Digite o Nome do Produto: ");

                        tipo = readlinesync.keyInSelect(tipoProduto,"", {cancel:false}) + 1;
        
                        preco = readlinesync.questionFloat("Digite o preco: ");

                        switch (tipo) {

                            case 1:
                                mantaasfáltica = readlinesync.question("Digite o tipo de Manta: ");
                                produtoController.atualizar(new manta_asfaltica(produtoController.gerarId(),
                                    nome, tipo, preco, mantaasfáltica));

                            break;
        
                                case 2:
                                    mantalíquida = readlinesync.question("Digite o tipo de Manta: ");
                                    produtoController.atualizar(new manta_liquida(produtoController.gerarId(),
                                        nome, tipo, preco, mantalíquida));
                                    break;
                        }
                        
                    }else

                    console.log("Produto não Encontrado!")
        


                keyPress()
                break;

            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nDeletar um Produto\n\n", colors.reset);

                    id = readlinesync.questionInt("Digite o Id do Produto: ");
                    produtoController.deletar(id);

                keyPress()
                break;

            default:
                console.log(colors.fg.whitestrong,
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Dhessyca Sousa - dhessyca.pessoal@gmail.com");
    console.log("https://github.com/Dhessyca01");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}


}

main();
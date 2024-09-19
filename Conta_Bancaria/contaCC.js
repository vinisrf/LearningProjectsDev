const input = require ('prompt-sync')();

/** Conta Bancaria 
 * 
 * Em desenvolvimento!
 */


const contaCC = {
    NumeroConta: undefined,
    SaldoAtivo: undefined,
    Credito: undefined,
    Usuario: undefined,
    Transf: undefined,
    Recebimento: undefined,
}

/** Variaveis globais */

const entrada = parseInt(input("PARA ABRI CONTA DIGITE [1] ou [2] PARA CANCELAR:"));
let abreConta = entrada;

/**--------------------- */

/** Funções */

// função: criar usuário
function criaUser (){
            
    let nomeUser = input("INFORME SEU NOME: ");
    contaCC.Usuario = nomeUser;
    
    return contaCC.Usuario;
 }

// função: para aprovar crédito
function aprovaCredito (){
    let salarioMes = parseFloat(input("INFORME SEU RENDIMENTO MENSAL: "));
    contaCC.Credito = salarioMes * 1.5;
    
    return contaCC.Usuario;
    
}
// função: Após informar nome e renda mensal, o sistema pesrgunta se deseja confirmar e prosseguir ou se deseja editar os dados.
function confirmaDados(){
    let confDados = parseInt (input("PARA CONFIRMAR OS DADOS TECLE [1] PARA MUDAR OS DADO TECLE [2]: "));
    
    if(confDados == 1){
        console.log("CONTA CRIADA! ", "USUARIO: "  + contaCC.Usuario+ " CREDITO DISPONIVEL: " + contaCC.Credito.toFixed(3))
        criaNumConta();

    }else if(confDados == 2){
        criaUser();
        aprovaCredito();
        confirmaDados();
    }
}

// Função: Gerar numero da conta


// Função: Criar nova conta

/**------------------------- */

switch (abreConta){
    
    case 1:
        
        criaUser();
        aprovaCredito();
        confirmaDados();


        break;

    case 2:
        console.log("Operação cancelada")
        
        break;

    default:
        console.log("OPÇÃO INCORRETA!")
     
}
const input = require ('prompt-sync')();

/**
 * Conta Bancaria 
 * 
 * Em desenvolvimento
 * 
 * */  



const contaCC = {
    NumeroConta: undefined,
    SaldoAtivo: undefined,
    Credito: undefined,
    Usuario: undefined,
    Transf: undefined,
    Recebimento: undefined,
}

/** Variaveis globais */

let abreConta = parseInt(input("PARA ABRIR CONTA TECLE [1] PARA CANCELAR TECLE [2]:"));
let numConta = [null,null,null,null,".",null,null,null,null,".",null,null,null,null,".",null,null,null,null];

/**--------------------- */

/** Funções */

//função: Inicio
function inicio(){
        
    
        criaUser();
        aprovaCredito();
        confirmaDados();
        
}

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
    
    return contaCC.Credito;
    
}

// função: Após informar nome e renda mensal, o sistema pesrgunta se deseja confirmar e prosseguir ou se deseja editar os dados.
function confirmaDados(){
    let confDados = parseInt (input("PARA CONFIRMAR OS DADOS TECLE [1] PARA MUDAR OS DADOS TECLE [2]: "));
    
    if(confDados == 1){
        geraNumConta()
        console.log("------------------CONTA CRIADA!--------------------");
        console.log("NÚMEOR DA CONTA: "+ contaCC.NumeroConta.join(' '));
        console.log("USUARIO: "  + contaCC.Usuario);
        console.log("CREDITO DISPONIVEL: " + contaCC.Credito.toFixed(3));
        console.log("--------------------------------------------------");

    }else if(confDados == 2){
        criaUser();
        aprovaCredito();
        confirmaDados();
    }else{
        return confirmaDados();
    }
}

// Função: Gerar numero da conta
function geraNumConta (){
    let min = 0;
    let max = 9;

    numConta = numConta.map( value => digitosConta = Math.floor(Math.random() * (max - min + 1)) + min);
        numConta.splice(4,1,'.')
        numConta.splice(9,1,'.')
        numConta.splice(14,1,'.');

        contaCC.NumeroConta = numConta;

        return contaCC.NumeroConta
}

// função: volta para o inicio (EM MANUTENÇÂO)
function retornoInicio(){
    
    let abreConta = parseInt(input("PARA ABRIR CONTA TECLE [1] PARA CANCELAR TECLE [2]:"));
    while (abreConta != 1) {
        console.log("OPÇÃO INVÁLIDA!");
        retornoInicio();
        break;
    }if(abreConta == 1){
        
        inicio();
        
    }
        
}
// função: Criar senha

// função: Criar nova conta

/**------------------------- */

// switch: inicio do sistema
switch (abreConta){
    
    case 1:
        
        inicio();


        break;

    case 2:
        console.log("OOPERAÇÃO CANCELADA!");
        
        break;

    default:
        console.log("OPÇÃO INVÁLIDA!");
        retornoInicio();
     
}
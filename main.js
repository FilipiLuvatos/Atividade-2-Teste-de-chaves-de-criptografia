//Filipi de Luca Valim dos Santos
//RA 22216027-7
const axios = require('axios')
const fs = require('fs')

var chave = []
var resultado = []
var contador0 = 0
var contador1 = 0


require.extensions['.txt'] = function (module, filename) {// função para ler o arquivo txt
    module.exports = fs.readFileSync(filename, 'utf8');
};
var words = require("./chaves.txt"); // guarda todos os chaves array "words"



function PegandoChave(words2){ //Separa a chave do restante
    //as linas a seguir é feito um tratamento com funções para 
    // seprar e pegar uma chave de cada vez 
    let posfirstkey = words2.search("'")
    let aux = words2.substring(posfirstkey+1, words2.length)
    let posPointFinal = aux.search("'")
    let Key = aux.substring(0, posPointFinal)

    words = words2.substring(Key.length+3,words2.length) // corta e elimina a chave ja usada das demais
 
    //console.log(words)
    converte(Key)
}

function converte(valor){ //converte a chave em binario
   
    for (i = 0; i < valor.length; i++) {
        
      let aux1 = valor[i].charCodeAt()
      let aux2 = aux1.toString(2) 
      chave.push(aux2)
    }
    
    let chave2 = chave.join('') 
    

    cont(chave2)

    for (i = 0; i < valor.length; i++) {// limpar o vetor de apoio
        chave.pop()
    }
}   

function cont(valorBinario){// função para testar se aleatório conforme o "monobit"

    
  
    for (i = 0; i < valorBinario.length; i++) {
        if(valorBinario[i] == "1") {
            contador1++}

        else if(valorBinario[i] == "0"){
         contador0++
        }
    } 
   

    if((contador0 >=9654 && contador0<=10346)&&(contador1 >= 9654 && contador1 <= 10346)){

        resultado.push("Aleatorio")

    }else resultado.push("Nao - Aleatorio")

 
    contador0 = 0
    contador1 = 0
  
}

    

for (let i = 0; i < 20 ; i++) {
  PegandoChave(words)
}
   
console.log(resultado)
    

 

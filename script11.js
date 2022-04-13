//criar função para mostrar os npueros primos
//primos
//compostos

exibirNumerosPrimos(30);

//resposta do exercicio
// function exibirNumerosPrimos(limite){
//     for(numero = 2; numero <= limite; numero++){
//         let ehPrimo = true;

//         for( let divisor = 2; divisor < numero; divisor++){
//             if(numero % divisor ===0){
//                 ehPrimo = false;
//                 break;
//             };
//         }
//         if(ehPrimo) console.log(numero);
//     };
// };
// no primeiro 'for' considera que todos os numeros são primos
// no segundo 'for' validamos os numeros, começa em 2 pra 
//descartar o numero 1 pois todo numero é divisivel por 1, a
//condição do segundo 'for' é menos o divisor para que ele 
//não divida por ele memos e passe o filtro pois todo o 
//numero é divissivel por si mesmo, no if a condição é se 
//numero dividido pelo divisor(em loop, testando todas as
//codições) se a sobra for igual a zero, o true vira false e 
//para o loop e passa para o proximo numero, e volta primeiro 
//'for' e recomeçamos a analise.


//minha resposta errada
// function exibirNumerosPrimos(limite){
//     for(let i = 1; i <= limite; i++){
//         if(i / 1 === i && i / i === 1){ 
//             console.log(i)
//         }

//     }
// }

// reposta do exercicio alternativa 
function exibirNumerosPrimos(limite){
    for(numero = 2; numero <= limite; numero++){
        if(numeroPrimo(numero)) console.log(numero);
    };
};

function numeroPrimo(numero){
    for( let divisor = 2; divisor < numero; divisor++){
        if(numero % divisor ===0){
            ehPrimo = false;
            return false;
        };
    }
    return true;
}
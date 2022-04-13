//Divisível por 3 => fizz
//Divisível por 5 => buzz
//Divisível por 3 e 5 => fizzbuzz
//Não é divisível por 3 e 5 => entrada
//Não é número => 'Não é um número'

const resultado = fizzBuzz(11);
console.log(resultado);

//reposta do exercício
function fizzBuzz(entrada){
    if (typeof entrada !== 'number'){
        return 'Não é um número!';
    }else if(entrada % 3 === 0 && entrada % 5 === 0 ){
        return 'fizzBuzz';
    }else if( entrada % 5 === 0){
        return 'buzz';
    }else if(entrada  % 3 === 0 ){
        return 'fizz';
    }
    return entrada;
}

//minha resposta, tive dificuldade com a condição 'não é um número'
// function fizzBuzz(entrada){
//     if(entrada % 3 == 0 && entrada % 5 == 0 ){
//         return 'fizzBuzz';
//     }else if( entrada % 5 == 0){
//         return 'buzz';
//     }else if(entrada  % 3 == 0 ){
//         return 'fizz';
//     }else if (entrada % 3 !== 0 || entrada % 5 !== 0){
//         return entrada;
//     }else{
//         if(entrada == NaN)
//         return 'Não é um número';
//     };
// }
// criar função somar que retorna a soma de todos os multiplipos de 3 e 5

//multiplos de 3 até 10 - 3,6,9
//multiplos de 5 até 10 - 5,10

//somando os multiplos 

somar(10);

//reposta do exercicio
function somar(limite){
    let multiplos3 = 0;
    let multiplos5 = 0;
    for(i = 0; i <= limite; i++){
        if(i % 3 === 0 ){
            multiplos3 += i;
        }else if(i  % 5 === 0){
            multiplos5 += i;
        };
    };
    console.log(multiplos3 + multiplos5);
}




//minha resposta
// function somar(limite){
//     let num3 =0;
//     let num5 =0;
//     for (let i = 0; i <= limite; i++) {
//         if (i % 3 === 0) {
//             num3 = i + num3;
//         } else if (i % 5 === 0) {
//             num5 = i + num5;
//         }
//     };
//     let resultado = num3 + num5;
//     console.log(resultado);
// };
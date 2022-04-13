//criar uma função que exibe a quantidade de * que aquela linha possui

exibirAsteristicos(20);


//respota do exercicio
function exibirAsteristicos(linhas){
   let padrao = '' ;
   for(let linha = 1; linha <= linhas; linha++){
    console.log(padrao+= '*');     
   };
}
//respota do exercicio alternativo
// function exibirAsteristicos(linhas){
//     for(let linha = 1; linha <= linhas; linha ++){
//         let padrao ='';
//         for(let i = 0; i < linha; i++){
//             padrao+= '*';
//         };
//         console.log(padrao);
//     };
// }

//minha resposta, errada
// function exibirAsteristicos(linhas){
//     for(let i = 0; i <= linhas; i++){
//         for(let j = 0; j <=  i; j++){
//             console.log('*')
//         };
//     };
// };
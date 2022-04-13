//exercicio ua função que usa 2 npumeros e rertorna o mair entre eles

//respota do exercício
// function max(num1,num2){
//     if(num1 > num2){
//         return num1;
//     }else{
//         return num2;
//     }
// }
let valorMaior = max(15,9);
console.log(valorMaior);


//versão alternativa mais clean
// function max(num1,num2){
//     if(num1 > num2)
//         return num1;
//     else return num2;   
// }

//versão alternativa mais clean abreviando tudo
//onde ('?' = signfica 'se sim') ,(':' = significa 'se não')
function max(num1,num2){
 return num1>num2 ? num1 : num2;  
}

//fiz assim pois não me atentei ao exercicio que pedia uma função
// let num1 = 40;
// let num2 = 30;

// if(num1 > num2){
//     console.log(num1);
// }else{
//     console.log(num2);
// }

//Captar dados e verificar se o usuário é  alcançou a maioridade
alert('Verificador de Maioridade:');



let nome = prompt('Qual seu nome?');
let idade =parseInt(prompt('Qual a sua idade?'))

if(idade < 18){
    alert(nome + ', você ainda não atingiu a maioridade');
}else{
    alert(nome + ', você já atingiu a maioridade');
};


//idéia pra depois
// validarNome.addEventListener("keypress", function(i){
//     const keyCode = (i.keyCode ? i.keyCode : i.wich);

//     //47 ao 58 = São numeros

//     if(keyCode >= 47 && keyCode <= 58){
//         i.preventDefault();
//     };

// });
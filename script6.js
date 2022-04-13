//receber uma quantidade de valores para avaliar
//função exibe se cada valor é par ou impar


exibirTipo(8);

//minha resposta , igual a resposta do exercicio
function exibirTipo(limite){
    for(let i = 0; i <= limite; i++){
        if(i % 2 === 0){
            console.log(i, 'par')
        }else{
            console.log(i, 'impar')
        }           
    };
}
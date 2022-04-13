// exercício verificador de velocidade máxima
//velocidade máxima de até 70km/h
//a cada 5km/h do limete você perde 1 ponto na carteira
// acima de 12 pontos carteira suspensa
//Math.floor() = arredonda pro numero inteiro mais próximo

verificarVelocidade(150);

//reposta do exercicio


function verificarVelocidade(velocidade){
    const valordeVelocidadeMaxima = 70;
    const kmPorPontos = 5;
    const pontuacaoMaxima = 12;
    if(velocidade <= valordeVelocidadeMaxima){
        console.log('Está  dentro do limite de velocidade')
    }else{
       const pontos = Math.floor(((velocidade - valordeVelocidadeMaxima)/kmPorPontos));
       if(pontos >= pontuacaoMaxima ){
           console.log('Carteira Suspensa')
       }else{
           console.log('Você perdeu ', pontos, ' pontos')
       }
    }
}



// não conseguir realizar o exercicio
// function verificarVelocidade(velocidade){
//     const tabelaDePontos = [70,75,80,85,90,95,100,105,110,115,120,125,130,135,140,145,150,160,165,170,175,180,185];
//     if(velocidade < 70){
//         console.log('Está  dentro do limite de velocidade')
//     }
//     for(let indice in tabelaDePontos){
//         console.log(indice[velocidade])
//     }
// }
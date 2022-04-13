//exercício nota escola
//obter a media a partir de um array

// 0 - 59: F
// 60 - 69: D
// 70 - 79: C
// 80 - 89: B
// 90 - 100: A

const array = [70,90,80]

console.log(mediaAluno(array));

//reposta do exercicio
function mediaAluno(notas){
    const media = calcularMedia(notas);
    if(media < 60) return 'F' ;
    if(media < 70) return 'D' ;
    if(media < 80) return 'C' ;
    if(media < 90) return 'B' ;
    return 'A';
}

function calcularMedia(array){
    let soma = 0 ;
    for(let valor of array){
        soma += valor;
    };
    return soma/(array.length);
}



//minha resposta
// function mediaAluno(notas){
//     media = Math.floor(((array[0] + array[1] + array[2])/3));
//     if( media <=59){
//         return 'F'
//     }else if (media >=60 && media <=69){
//         return 'D'
//     }else if (media >=70 && media <=79){
//         return 'C'
//     }else if(media >=80 && media <=89){
//         return 'B'
//     }else if(media >=90 && media <=100){
//         return 'A'
//     }
// }
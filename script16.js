//Faixa de preço
//criar um array de objetos de faixa de preço para que ela possa ser usado em um site igual o mercado livre
//-----------
let faixas = [
    {tooltip: 'até R$700' , minimo: 0, maximo:700},
    {tooltip: 'de R$700 até R$1000' , minimo: 700, maximo:1000},
    {tooltip: 'de R$1000 ou mais' , minimo: 1000, maximo:999999}
];
console.log(faixas);
// versão altervativa

function criarFaixaPreco(tooltip,minimo,maximo){
    return{
    tooltip,
    minimo,
    maximo
    }
};

let faixas2 = [
    criarFaixaPreco('objeto1',1,700),
    criarFaixaPreco('objeto2',701,1000),
    criarFaixaPreco('objeto3',1000,10000),
]
console.log(faixas2);

// versão alternativa2

function FaixaPreco(tooltip,minimo,maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo - maximo
};
let faixas3 = [
    new FaixaPreco('objeto4',1,700),
    new FaixaPreco('objeto5',701,1000),
    new FaixaPreco('objeto6',1000,10000)
]

console.log(faixas3);


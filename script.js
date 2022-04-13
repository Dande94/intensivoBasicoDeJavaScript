let meuNome = 'Anderson Nunes';
let minhaIdade = 28;
let estaAprovado = true;
let sobrenome = undefined;

let minhaPessoa = {
    nome: 'Anderson',
    idade: 28,
    estaAprovado: true,
    sobrenome: 'Nunes'
};


//------------------------------------

let familia = [true, 24,'Anderson', 01];

console.log(familia[2]);

//-------------------------------------
//para criar funções
//verbo + subtantivo 

let corSite = "azul"
function resetaCor(cor,tonalidade){
    corSite = cor + ' ' + tonalidade;
};

console.log(corSite);
resetaCor("verde","claro");
console.log(corSite);

//-------------------------------------
//tipos de funções
//1º realizar uma tarefa, não devolve nada
function dizerNome(){
    console.log('Anderson Nunes');
};

dizerNome()
//2º retorna um resultado
function multiplicarPorDois(valor){
    return valor * 2;
};

console.log(multiplicarPorDois(5));
// ou 
let resultado = multiplicarPorDois(5);
console.log(resultado);
//-------------------------------------
//Operadores = aritiméticos(matematicos) (+, -, *, /, **)
let salario = 100;
console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(5 ** 5);
//operador de incremento
//++ ou --
let idade = 18;
console.log(idade++);
//soma depois de entra no loop
console.log(++idade);
//soma antes de entra no loop
console.log(idade);
console.log(idade--);
console.log(--idade);
console.log(idade);
//--
//Operadores = atribuição
let valorTecladoGamer = 100;
console.log(valorTecladoGamer);
valorTecladoGamer += valorTecladoGamer; // valorTecladoGamer = valorTecladoGamer + valorTecladoGamer; abreviando a soma
valorTecladoGamer -= valorTecladoGamer; // valorTecladoGamer = valorTecladoGamer - valorTecladoGamer; abreviando a subtração
console.log(valorTecladoGamer);
//--
//operadores = igualdade 
//igualdade estrita
console.log(1 === 1); // verdadeiro
console.log('1' === 1); // falso
//igualdade solta
console.log(1 == 1);// verdadeiro
console.log('1' == 1);// verdadeiro
//--
//operadores = comparação
let pontos = 100;
let tipo = pontos > 100 ? 'premiun' : 'comum';
console.log(tipo)
//--
//operadores = Lógicos
//operador = e (&&) retorna verdadeiro se as todas condições 
//forem saciadas
console.log(true&&true);//retorna verdeiro
console.log(true&&false);//retorna falso

let maiorIdade1 = false;
let possuiCarteiraTrabalho1 = true;
let podeAplicar1 = maiorIdade1 && possuiCarteiraTrabalho1;

console.log(podeAplicar);
//--
//operador = ou (||) retorna verdadeiro se umas das condições //forem saciadas

let maiorIdade2 = false;
let possuiCarteiraTrabalho = true;
let podeAplicar = maiorIdade2 || possuiCarteiraTrabalho;

console.log(podeAplicar);

//--
//operador = NOT (!)
let candidatoRecusado = !podeAplicar;
console.log(candidatoRecusado)
//--
//operadores booleanos
//Falsy -> underfined - null - 0 - false - ''- NaN (nt a number)

//Truthy


let corPersonalizada = 'vermelho';
let corPadrao = 'azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);

//------------------------------------- troca de assunto!

//if / else
//se a hora estiver entre 06:00 até 12:00 : Bom dia!
//se a hora estiver entre 12:00 até 18:00 : Boa tarde!
//Caso contrário : Boa Noite!
let hora = 20;

if (hora > 6 && hora < 12){
    console.log("Bom dia!");
}
else if(hora > 12 && hora < 18){
    console.log("Boa tarde!");
}
else{
    console.log("Boa noite!");
}
//--

let permissao; // comum, gerente, diretor

permissao = 'diretor';
switch(permissao){
    case 'comum':
        console.log('Usuário comum');
    break;

    case 'gerente':
        console.log('Usuário gerente');
    break;

    case 'diretor':
        console.log('Usuário diretor');
    break;

    default:
        console.log('Usuário não reconhecido!')
}
//--
//Laço / loop = for - while - do..while - for..in - for..of
//for
for(let i = 1; i <= 5; i++){
    console.log('Esto apredendo!', i);
}
//imprmir números impares crescente
for(let i = 1; i <= 5; i++){
    if(i % 2 !== 0){ // modulus % 
        console.log(i)
    }
}
//imprmir números impares decrescente
for(let i = 5; i >= 1; i--){
    if(i % 2 !== 0){ // modulus % 
        console.log(i)
    }
}
//--
//while (verifica primeiro e executa depois)
//imprmir números impares decrescente
let j = 5;

while( j >= 1){
    if (j % 2 !==0){
        console.log(j);
    }
    j--
}

//--
//do..while (executa primeiro e verifica depois)(entra pelo
//menos 1 vez no laço)
let i = 0;
do{
    console.log('digitando...',i);
    i++;
}while (i < 5);
//--
//for..in

const pessoa = {
//  key   -   value
    nome:'Anderson',
    idade:28
}
//key-value - referente a chave
for(let chave in pessoa){
    console.log(chave,pessoa['nome']);     
}
// //indice é para arrays (fator de localização)
const cores = ['vermelho','azul','verde'];
for(let indice in cores){
    console.log(indice,cores[indice]);
}

//--
//for..of
for(let cor of cores){
    console.log(cor);
}

//------------------------------------- troca de assunto!
//Factory Functions - função de fábrica
const exemploCelular = {
    marcaCelular : 'ASUS',
    tamanhoTela : {
        vertical : 155,
        horizontal : 75
    },
    capacidadeBateria : 5000,
    ligar : function(){
        console.log("Fazendo ligação ...")
    }
}
// metodo encapsulado
 function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria){
     return{
         marcaCelular,
         tamanhoTela,
         capacidadeBateria,
         ligar(){
             console.log("Fazendo ligação...")
         }
     }
 }
//populando a função
 const celular1 = criarCelular('Zenfone',5.5,5000);
 console.log(celular1)

 // meu exemplo
 function criarMoto(fabricante,modelo,ano,capacidadeTanque){
     return{
         fabricante,
         modelo,
         ano,
         capacidadeTanque,
         darPartida(){
             console.log("Rom pom pom..")
         }
     }
 }
 const moto1 = criarMoto('Yamaha','fazer',2019,13);
 console.log(moto1)

//--
//Constructor functions - funções construtoras 
//exemplo de factory functions-----------------------
//camel case - umDoistresQuatros                    
function criarCelular(marcaCelular,tamanhoTela,  capacidadeBateria){
    return{
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log("Fazendo ligação...")
        }
    }
}
//------------------------------------------------
//Pascal case - UmDoisTresQuatro
function Celular(marcaCelular,tamanhoTela,capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
        console.log("Fazendo ligaçãoo....");
    };
};

const OutroExemploCelular = new Celular('ASUS',5.5,5000);
console.log(celular);

//-------- meu exemplo-------------
function Motoca(fabricante,modelo,ano,capacidadeTanque){
    this.fabricante = fabricante;
    this.modelo = modelo;
    this.ano = ano;
    this.capacidadeTanque = capacidadeTanque;
    this.darPartida = function(){
        console.log(" Rom  pom pom ...");
    };
};

const motoca = new Motoca('Yamaha', 'Fazer', 2019,13);
console.log(moto);

//---------------------------------

//------------------------------------- troca de assunto!
//Natureza dinâmica de objetos

objeto
const mouse = {
    cor : 'red',
    marca : 'dazz'
};
//adicionando atributos ao objeto
mouse.velocidade = 5000;
//adicionando função ao objeto
mouse.trocarDPI = function(){
    console.log('mudando DPI')
};
//apagando atributo do objeto
delete mouse.velocidade;
//apagando função do objeto
delete mouse.trocarDPI;
console.log(mouse);
//--
//clonando objetos

const celular = {
    marcaCelular : 'ASUS',
    tamanhoTela : {
        vertical : 155,
        horizontal : 75
    },
    ligar : function(){
        console.log("Fazendo ligação ...")
    }
}

const novoObjeto = Object.assign({
    capacidadeBateria : 5000,
},celular);
console.log(novoObjeto);

//maneira alternativa

const objeto2 = {...celular};
console.log(objeto2);

//-------- meu exemplo-------------

const moto = {
    fabricante : 'Yamaha',
    modelo : 'Fazer',
    ano : 2019,
    darPartida : function (){
        console.log('Rom pom pom ...');
    }

};

const novaMoto = Object.assign({
    capacidadeTanque : 13 + ' litros',
}, moto);
console.log(novaMoto);
//maneira alternativa
const moto2 = {...moto};
console.log(moto2);

//-----------------------------------
//-- 
MATH
Math.random()
Math.max(3,6,8,10) = 10
Math.min(3,6,8,10) = 3
//--
//Strings
//tipo primitivo
const minhaPrimeiraMensagem = ' minha primeira mensagem ' ;
//tipo objeto
const outraMensagem = new String ('Bom dia')

//tipos das variaveis
typeof mensagem;
String
typeof outraMensagem;
object
//--
//quantidade de caracteres
outraMensagem.length;
7
//--
//index dentro da mensagem - tipo indice
outraMensagem[2];
'm'
//--
//verifica se há aquela palavra na String
mensagem.includes('primeira');
true
mensagem.includes('vaso');
false
//--
//Verifica se começa e terminha com tal palavra
mensagem.startsWith('minha');
true
mensagem.startsWith('verde');
false

mensagem.endsWith('mensagem');
true
mensagem.endsWith('verde');
false
//--
//retorna a posição de inicio da palavra
mensagem.indexOf('primera');
6
//--
//troca a palavra
mensagem.replace('minha', 'sua');
"sua primeira mensagem"
//--
//remove espaços excedentes (começo e final)
mensagem.trim();
//--
//Quebra a mensagem por espaços(como se transformace em um vetor, dentro do paramentro aspas simples com um espaço interno)
mensagem.split(' ');
//--------------------------------------
//------------------------------------- troca de assunto!
// template Literal
const mensagem = 'Oi isso é a minha\n \'primeira\' mensagem';
console.log(mensagem);
// object = {}
// boolean = true ou false
// string = '' ou ""
// template = `` (crase) - nesse tipo mantém a formatação que eu quiser, como espaços, pontuações e quebras de linha

const email = 
`Fulano,
Obrigado por se 'increver' no canal `;
console.log(email);

const nome ='Anderson Nunes'
const email2 = 
`${nome},
Obrigado por se 'increver' no canal
${2+2} `;
console.log(email2);

//meu exemplo----------------------------------
let name = prompt('Me diga seu nome, por favor!');
let anoNasc = parseInt(prompt('Agora ano que nasceu, por favor!'))
const anoAtual = 2022
const exemplo = 
`Olá ${name} ,
Hoje estimo que você tenha ${anoAtual - anoNasc} anos`
console.log(exemplo)

//---------------------------------------------
//------------------------------------- troca de assunto!
DATE
const data1 = new Date();
const data2 = new Date('April 08 2022 09:30');
//Na linha de baixo  é declarado direto em numeros, e acontece a converção automatica(o mes se inicia do zero ou seja janeiro = 0 ... dezembro = 11)(horas e minutos é separado por vírgula)
const data3 = new Date(2022,03,08,9,55);

//troca de dados na declarações(ano)
data3.setFullYear(2030);
//converte a data para string
data2.toDateString();
//retorna os dados contidos dentro do Date(zona temporal - GMT)
data2.toTimeString();
// retorna como é visto a data no banco de dados
data2.toISOString();
//---------------------------------------------
//------------------------------------- troca de assunto!
//introução a arrays
//add novos elementos
//Encontrar elementos
// remover elementos
// Dividir elementos
//Dividir Arrays
//Combinar Arrays
//--
//add novos elementos
const numeros = [1,2,3];
console.log(numeros);

//inserir no inicio
numeros.unshift(0);
console.log(numeros);
//inserir no meio
//primeiro parametro posição em que desejar insirir o novo elemento
//segundo parametro o que deseja excluir 0(zero) significa "não excluir algo"
//terceiro parametro o elemento que deseja excluir
numeros.splice(1,0,'a');
console.log(numeros);
//inserir no fim
numeros.push(5);
console.log(numeros);

//-------- meu exemplo-------------

const letras = ['a','b','c','d'];
console.log(letras);

//inserir no inicio
letras.unshift('z');
console.log(letras);

//inserir no meio
letras.splice(3,0,8);
console.log(letras);

//inserir no fim
letras.push(13);
console.log(letras);

//inserir no meio testando
//ao add algum valor ao segundo parametro ele exclui na mesmo quantidade os outros valores do array. ex: se depois do novo elemento tiver 5 elementos e add 2 no parametro ele deixa os ultimos 3 elementos
letras.splice(3,2,22);
console.log(letras);
//---------------------------------
//--
//Encontrar elementos - primitivo
const numeros2 = [1,2,3,1,4];

//com o indexOf() ele busca a localização do elemento dentro do array e não o valor inserido nele
//retorna = 1 -> pois o valor 2 está localizado na posição 1 dentro do array
//caso volte -1(menos um), significa que ele não encontrou o valor dentro do array, ele se baseia também no tipo dos dados, aqui por exemplo de colocar o valor como string (ex:'1') ele não encontra pois está procurando numbers
console.log(numeros2.indexOf(2));

//nesse aqui aqui ele irá procurar a ultima ocorrência daquele elemento, usando a mesma lógica do exemplo anterior
console.log(numeros2.lastIndexOf(1));

//retorna verdadeiro ou falso em relação de existir esse valor no array
console.log(numeros2.indexOf(2) !== -1);
console.log(numeros2.includes(2));

//-------- meu exemplo-------------
const  letras2 =['a','b','c','a','d'];

console.log(letras2.indexOf('b'));
console.log(letras2.lastIndexOf('a'));
console.log(letras2.indexOf('a') !== -1);
console.log(letras2.includes('d'));
//---------------------------------
//-- 
//Encontrar elementos - referencias
const marcas = [
    {id:1, nome: 'a'} ,
    {id:2, nome: 'b'} 
];

//para encontrar a primeira ocorrência daquele elemento
const marca = marcas.find(function(marca){
    return marca.nome ==='a';
})
console.log(marca);
//-------- meu exemplo-------------

const motos =[
    {id:1, marca:'Yamaha'},
    {id:2, marca:'Kawasaki'},
    {id:3, marca:'Harley Davidson'},
    {id:4, marca:'Honda'},
    {id:5, marca:'Suzuki'}
];
const fabricante = motos.find(function(fabricante){
    //ambos return funcionam, porém comentar aquele que não for testar
    return fabricante.marca === 'Harley Davidson'
    return fabricante.id === 1;
});
console.log(fabricante);

//---------------------------------
//--
//Arrow Functions (funçoes de flecha)

//mesmo exemplo do anterior, porém com função de flecha
const marcas2 = [
    {id:1, nome: 'a'} ,
    {id:2, nome: 'b'} 
];
console.log(marcas2.find((marca)=>{
    return marca.nome ==='a';
}));
//versão mais curta, caso seja apenas 1 parametro
console.log(marcas2.find(marca => marca.nome ==='b'));
//caso não tenha parametro, deixa parenteses vazio
console.log(marcas2.find(() => marca.nome ==='b'));
//--
//removendo elementos dos arrays
const numeros3 = [1,2,3,4,5,6];
console.log(numeros3)
//remover no final
console.log(numeros3.pop());
console.log(numeros3);
//remover no inicio
console.log(numeros3.shift());
console.log(numeros3);
//remover no meio
//primeiro parametro informa onde remover
//segundo parametro quantos elementos remover a partir dali
console.log(numeros3.splice(2,1));
console.log(numeros3);

//-------- meu exemplo-------------
const  letras3 =['a','b','c','a','d'];
console.log(letras3);
console.log(letras3.pop());
console.log(letras3);
console.log(letras3.shift());
console.log(letras3);
console.log(letras3.splice(3,1))
console.log(letras3);
//---------------------------------
//--
//esvaziando um array
let numeros4 = [1,2,3,4,5,6];
console.log(numeros4);
//solução 1
let outros1 = numeros4;
// a variavel outros armazenou o array do numeros4, assim mantendo uma cópia dele
numeros4 =[];
console.log(numeros4);
console.log(outros1);

//solução 2 - esvazia qualquer vestigio do array
// melhor metodo de esvaziar um array
let numeros5 = [1,2,3,4,5,6];
console.log(numeros5);
let outros2 = numeros5;
console.log(outros2);
numeros5.length = 0;
console.log(numeros5);
console.log(outros2);

//solução 3 - esvazia qualquer vestigio do array
let numeros6 = [1,2,3,4,5,6];
console.log(numeros6);
let outros3 = numeros6;
console.log(outros3);

//o uso do splice, sugere que um valor seja trocado por vazio e apague o restante
numeros6.splice(0,numeros6.length);
console.log(numeros6);
console.log(outros3);

//solução 4 - esvazia qualquer vestigio do array
let numeros7 = [1,2,3,4,5,6];
console.log(numeros7);
let outros4 = numeros7;
console.log(outros4);

//essa solução não é performatica, caso tenha muitos dados
while(numeros7.length>0){
        numeros7.pop();
    }
console.log(numeros7);
console.log(outros4);

//-------- meu exemplo-------------
let  letras4 =['a','b','c','d','e','f'];
console.log(letras4);
let alternativo1 = letras4;
console.log(alternativo1);

//--
//solução 1
letras4 =[];
console.log(letras4);
console.log(alternativo1);
//solução 2
letras4.length =0;
console.log(letras4);
console.log(alternativo1);
//solução 3
letras4.splice(0,letras4.length);
console.log(letras4);
console.log(alternativo1);
//solução 4
while(letras4.length > 0){
        letras4.pop();
    };
    console.log(letras4);
    console.log(alternativo1);
    //---------------------------------
    //--
    //Combinando ou dividindo um array 
    // tipo primitivo
    const primeiro = [1,2,3];
    const segundo = [4,5,6];
    console.log(primeiro);
    console.log(segundo);
    //contatenou os arrays
    const combinado = primeiro.concat(segundo);
    console.log(combinado);
    
    //dividir
    //dentro do parametro ele sempre pega a ultima posição -1(menos um);
    const cortado = combinado.slice(1,3);
    //nesse caso retornará [2,3];
    console.log(cortado);
    
    //outro metodo
    //nesse metodo ele irá pega apartir da posição inforada no parametro e cortar o que tiver para atrás
    //caso deixe o parametro vazio, ele apenas copia todo o array
    const cortado2 = combinado.slice(1);
    //nesse caso retorará [2,3,4,5,6]
    console.log(cortado2);
    
//---

//exemplo com tipo referencia
const terceiro = [{id:1}];
const quarto = [4,5,6];
terceiro[0].id = 10;
console.log(terceiro);
console.log(quarto);
//contatenou os arrays
const combinado2 = terceiro.concat(quarto);
//retornara [{id:1},4,5,6] 
console.log(combinado2);

//dividir
const cortado3 = combinado2.slice(1);
//retornara [4,5,6] 
console.log(cortado3);

//outro metodo
//caso deixe o parametro vazio, ele apenas copia todo o array
const cortado4 = combinado.slice(1);
//nesse caso retorará [2,3,4,5,6]
console.log(cortado4);


//-------- meu exemplo-------------
const letras5 = ['a','b','c'];
const letras6 = ['d','e','f'];
console.log(letras5);
console.log(letras6);

//combinar
const combinacao = letras5.concat(letras6);
console.log(combinacao);

//cortar
const cortar = combinacao.slice(2,5);
console.log(cortar);
//---------------------------------
//-- 
//operador spread

const quinto = [1,2,3];
const sexto = [4,5,6];
console.log(quinto);
console.log(sexto);

//combinar de maneira rapida com spread
const combinado3 = [...quinto,...sexto];
console.log(combinado3);

//passivel de alteração
const combinado5 = [...quinto,'a',...sexto,'b'];
console.log(combinado5);

// clonar
const clonado = [...combinado2];
console.log(clonado);

//-------- meu exemplo--------------------
const setimo = [1,2,3];
const oitavo = [4,5,6];
console.log(setimo);
console.log(oitavo);
console.log([...setimo,'%',...oitavo]);
//----------------------------------------

--
foreach

const numeros8 = [1,2,3,4,5];

//-----------------------------
//metodo arcaico
for (logando of numeros8){
    console.log(logando);
};
//---------------------------

//---------------------------
//modelo mais organizado
numeros8.forEach(function(printando){
    console.log(printando);
});
//---------------------------


// modelo arrow function (optimizado)
numeros8.forEach((printando) => console.log(printando));
// add do indice
numeros8.forEach((printando,indice) => console.log(printando,indice));

//-------- meu exemplo-------------------------------------
let  letras8 =['a','b','c','d','e','f'];
console.log(letras8);

letras6.forEach((mostrar,indice) => console.log(mostrar,indice));
//--------------------------------------------------------

//--
//combinando arrays denovo
const numeros9 = [1,2,3,4,5];
console.log(numeros9);
//adicionou um '.' entre cada valor do array
//porém posso qualquer outro caracter (ex: - , / , letra)
const combinado4 = numeros9.join('.');
//retornará 1.2.3.4.5
console.log(combinado4);

// aplicando a uma frase
const frase = 'olá bem vindo ao perfil';
//irá separar as palavras, e coloca dentro de um array
const mostrar = frase.split(' ');
//retornará ['olá', 'bem', 'vindo', 'ao', 'perfil']
console.log(mostrar);

console.log(mostrar.join('-'));
//retornará olá-bem-vindo-ao-perfil

//-------- meu exemplo--------------------
let  letras7 =['a','b','c','d','e','f'];
console.log(letras7);
console.log(letras7.join('.'));
let exemploFrase ='um exemplo de frase, para completar esse exercício';
let mostrar2 = exemploFrase.split(' ');
console.log(mostrar2);
console.log(mostrar2.join('-'));
//----------------------------------------

//--


// criar um métodopara ler a propriedades de um objeto e
//exibir somente as propriedades do tipo string que estão nesse objeto

const filme = {
    titulo : 'vingadores',
    ano : 2012,
    diretor: 'robin',
    personagem : 'thor'
}

exibirPropriedades(filme);

function exibirPropriedades(obj){
    for(prop in obj)
        if(typeof obj[prop] === 'string')
            console.log(prop,obj[prop])      
};
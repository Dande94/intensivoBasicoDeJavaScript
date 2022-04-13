//Montador de endereço


//Criar um objeto endereço que contém:
//Rua
//Cidade
//CEP
//exibirEndereco(endereco)

let endereco ={
    rua : 'Rua Quefrén',
    cidade : 'Joinville',
    cep : 89227740
};
console.log(endereco);
//add dados ao obj
endereco.descricao='Casa Verde';
console.log(endereco);
endereco.numeroCasa=55;
console.log(endereco);
//excluido dados no obj
// delete endereco.rua;
// console.log(endereco);

//reposta do exercicio - exibirEndereco
function exibirEndereco(endereco){
    for(let chave in endereco)
        console.log(chave,endereco[chave]);
}
exibirEndereco(endereco)
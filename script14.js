// Objeto postagem de Blog
//Criar um objeto de postagem de blog que vai conter as seguintes propriedades
// Título
//mensagem
//Autor
//visualizações
//comentários
    //(autos, mensagem)
//estaAoVivo

let postagem = {
    título : 'O Título',
    mensagem : 'A mensagem',
    autor : 'autor',
    visualizacoes : '17',
    comentarios: [
        {autor :'autor1' , mensagem:'mensagem'},
        {autor :'autor2' , mensagem:'mensagem'},
        {autor :'autor3' , mensagem:'mensagem'},
        {autor :'autor4' , mensagem:'mensagem'}
    ],
    estaAoVivo: true
}

console.log(postagem);
//Constructor Function

//Criar um objeto postagem
// titulo, mensagem, autor, visualizacoes, comentarios, estaaovivo


function Postagem(Titulo,Mensagem,Autor,Visualizacoes,Comentarios, EstaAoVivo){
    this.Titulo = Titulo,
    this.Mensagem = Mensagem,
    this.Autor = Autor,
    this.Visualizacoes = Visualizacoes,
    this.Comentarios = Comentarios,
    this.EstaAoVivo = EstaAoVivo,
    this.Postar = function(){
        console.log("postando...");
    };
};

const ExerPostagem = new Postagem('O Título', 'A Mensagem', 'O Autor', 17, [
    {autor :'autor1' , mensagem:'mensagem'},
    {autor :'autor2' , mensagem:'mensagem'},
    {autor :'autor3' , mensagem:'mensagem'},
    {autor :'autor4' , mensagem:'mensagem'}
], true
 );
console.log(ExerPostagem);

// resposta do exercício
 function Postagem1(titulo, mensagem, autor){
     this.titulo = titulo,
     this.mensagem = mensagem,
     this.autor = autor,
     this.visualizacoes = 0,
     this.comentarios = [],
     this.estaAoVivo = false
};

let postagem = new Postagem1('O Título', 'A Mensagem', 'O Autor');
console.log(postagem);
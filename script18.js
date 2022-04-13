

function verificarEntrada(){
    nomeConvidado = document.getElementById('seuNome').value;
    convidadosAnderson = [
        'Andrey',
        'Gisele',
        'Isabel',
        'Maria Teresinha',
        'Edson'
    ]
    if(convidadosAnderson.includes(nomeConvidado)){
        document.getElementById('resposta').innerText = 'Você pode entrar!'
    }else{
        document.getElementById('resposta').innerText = 'Você não pode entrar!'

    }

}


let listaDeAmigo = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nomeAmigo = document.querySelector('input').value;
    if (nomeAmigo == ''){
        alert('Por favor, insira um nome.');
        inputAmigo.focus();
        return;
    }
    if (listaDeAmigo.includes(nomeAmigo)) {
        alert("Amigo já adicionado.");
        limparCampo();
        inputAmigo.focus();
        return;
    }
    else {
        listaDeAmigo.push(nomeAmigo);
    }
    console.log(listaDeAmigo);
    limparCampo();
    inputAmigo.focus();
    exibeListaDeAmigos();
    resultado.innerHTML= '';
    
}

function limparCampo() {
    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = '';
}

function exibeListaDeAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for(let i = 0; i < listaDeAmigo.length; i++) {
        let item = document.createElement('li');
        item.textContent = listaDeAmigo[i];
       lista.appendChild(item);
    }
}

function sortearAmigo() {
    if(listaDeAmigo.length === 0){
        alert('Nenhum amigo Adicionado');
        return;
    }

    let amigoSorteado = listaDeAmigo[Math.floor(Math.random() * listaDeAmigo.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML= `O amigo sorteado foi: ${amigoSorteado}`;

    let limparLista = document.getElementById('listaAmigos')
    limparLista.innerHTML = '';
    listaDeAmigo = [];
}
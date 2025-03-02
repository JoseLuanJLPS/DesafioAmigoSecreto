//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Comando para declarar de um array para armazenar os nomes dos amigos.
let amigos = [];

// Função para adicionar um amigo.
function adicionarAmigo() {
    const inputNomeAmigo = document.getElementById("amigo");
    const nomeAmigo = inputNomeAmigo.value.trim();
    
    // Comando para verificar se o campo foi preenchido.
    if (!nomeAmigo) {
        alert("Por favor, insira um nome.");
        return;
    }
    
    // Comando para adicionar o novo nome ao array e limpar o campo do input.
    amigos.push(nomeAmigo);
    inputNomeAmigo.value = "";
    
    // Comando para atualizar a lista de amigos que é mostrada na página.
    atualizarLista();
}

// Função para atualizar a lista de amigos na página.
function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    
    // Comando para percorrer o array e criar uma linha na lista para cada nome novo.
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

// Função para sortear um amigo secreto.
function sortearAmigo() {
    // Comando para verificar se há amigos na lista.
    if (amigos.length === 0) {
        alert("Não foi adicionado nenhum amigo para sortear. Adicione um amigo primeiro.");
        return;
    }
    
    // Comando para gerar um índice aleatório e sortear um nome correspondente.
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    
    // Comando para exibir o resultado do nome sorteado na tela.
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo secreto é: ${amigoSorteado}</li>`;
}

// a
const titulo = document.getElementById("titulo");

// b
const lista = document.getElementById("lista");
const novoItem = document.createElement("li");
novoItem.textContent = "Novo Item";
lista.appendChild(novoItem);

// c
const paragrafo = document.querySelector(".descricao");
paragrafo.style.color = "blue";

// d
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", function(){
    resultado.textContent = "Botão Clicado!";
});

// e
const primeiroItem = lista.querySelector("li");
if (primeiroItem) {
    lista.removeChild(primeiroItem);
}
// Procura o botão ☰ no HTML
const botaoMenu = document.querySelector(".botao-menu");

// Procura o nav no HTML
const menu = document.querySelector("nav");


// Quando o botão for clicado...
botaoMenu.addEventListener("click", function () {

    // Adiciona ou remove a classe "menu-aberto"
    menu.classList.toggle("menu-aberto");

});

// "document" representa a página HTML inteira.
// "querySelector" procura um elemento dentro do HTML.

// Aqui o JavaScript procura o elemento que possui a classe ".botao-menu"
// e guarda esse elemento dentro da variável "botaoMenu".
//const botaoMenu = document.querySelector(".botao-menu");


// Aqui o JavaScript procura o elemento <nav> no HTML
// e guarda esse elemento dentro da variável "menu".
//const menu = document.querySelector("nav");


// "addEventListener" faz o JavaScript ficar esperando um evento acontecer.
// Nesse caso, o evento é "click".
//
// Ou seja:
// quando o usuário clicar no botão ☰,
// execute o código que está dentro da função.
//botaoMenu.addEventListener("click", function () {

    /*
    "menu" representa o <nav>.

    "classList" permite mexer nas classes desse elemento.

    "toggle" funciona como um interruptor:

    Se o nav NÃO tiver a classe "menu-aberto":
        → adiciona "menu-aberto"

    Se o nav JÁ tiver a classe "menu-aberto":
        → remove "menu-aberto"
    */

    //menu.classList.toggle("menu-aberto");

//});
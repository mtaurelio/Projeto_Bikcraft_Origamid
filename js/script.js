// Ativar Links do Menu
const links = document.querySelectorAll(".header-menu a");
// Aqui, todos os links (<a>) dentro de um elemento com a classe "header-menu" são selecionados e guardados na constante links. O querySelectorAll retorna uma lista com todos esses links.

function ativarLink(link) {
  const url = location.href; // Pega a URL atual da página (ou seja, o endereço completo da página).
  const href = link.href; // Pega o endereço do link que está sendo processado.
  if (url.includes(href)) {
    // Verifica se a URL atual da página contém o endereço do link. Se sim, então:
    link.classList.add("ativo"); // Adicionando a class "ativo"
  }
}
links.forEach(ativarLink); //Esse comando usa o forEach para passar por cada link da lista links, chamando a função ativarLink para cada um deles.

// Ativar Items do Orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

// Perguntas Frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria de Bicicletas
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}

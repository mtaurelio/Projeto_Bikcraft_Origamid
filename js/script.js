const links = document.querySelectorAll(".header-menu a");
// selecionou o html através da class mencionada

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
// função que irá ser executada.

links.forEach(ativarLink);
// fez com que a função passase para todos os links da class.
// codigo que matém a barrinha na subpagina selecionada. 01-13

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);
// codigo que transfere uma seleção para outra pagina, através de uma URL 16-25
//Perguntas Frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  console.log(controls);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);
console.log(perguntas);

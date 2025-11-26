function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  // pegar a tag img
  const image = document.querySelector("#profile img");

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    image.setAttribute("src", "./assets/avatar-light.png");
    image.setAttribute(
      "alt",
      "Foto de Willian sério, olhando a partir de um ângulo parcialmente de cima"
    );
  } else {
    // se tiver sem light mode, manter a imagem normal
    image.setAttribute("src", "./assets/avatar.png");
    image.setAttribute(
      "alt",
      "Foto de Willian sorrindo, com alguns livros de fundo e um quadro de O Pequeno Príncipe"
    );
  }
}

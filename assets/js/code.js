function colorirTitulo(id) {
  switch (id) {
    case "primariaTitulo":
      var titulo = document.getElementById("primaria");
      titulo.classList.add("titulo-colorido");
      setTimeout(function () {
        titulo.classList.remove("titulo-colorido");
      }, 1000);
      break;

    case "secundariaTitulo":
      var titulo = document.getElementById("secundaria");
      titulo.classList.add("titulo-colorido");
      setTimeout(function () {
        titulo.classList.remove("titulo-colorido");
      }, 1000);
      break;
    case "terciariaTitulo":
      var titulo = document.getElementById("terciaria");
      titulo.classList.add("titulo-colorido");
      setTimeout(function () {
        titulo.classList.remove("titulo-colorido");
      }, 1000);
      break;
    case "latenteTitulo":
      var titulo = document.getElementById("latente");
      titulo.classList.add("titulo-colorido");
      setTimeout(function () {
        titulo.classList.remove("titulo-colorido");
      }, 1000);
      break;
  }
}

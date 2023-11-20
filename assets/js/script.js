//window.alert('Bem vindo ao NerdInfo!')
//window.prompt('Qual é seu nome?');

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 12 * i);
    });
  }

  const texto = document.querySelector('p');
  typeWriter(texto);
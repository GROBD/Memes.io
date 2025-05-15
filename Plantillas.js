let listaMemes = [];

async function obtenerMemes() {
  try {
    const respuesta = await fetch('https://api.imgflip.com/get_memes');
    const datos = await respuesta.json();
    listaMemes = datos.data.memes;
  } catch (error) {
    console.error('Error al obtener memes:', error);
  }
}

function mostrarMemes(cantidad) {
  if (listaMemes.length === 0) {
    alert("Memes aún no cargados. Espera un momento.");
    return;
  }

  const contenedor = document.getElementById('meme-container');
  contenedor.innerHTML = '';

  const memesAleatorios = [];

  while (memesAleatorios.length < cantidad) {
    const indice = Math.floor(Math.random() * listaMemes.length);
    const meme = listaMemes[indice];

    if (!memesAleatorios.includes(meme)) {
      memesAleatorios.push(meme);

      const div = document.createElement('div');
      div.classList.add('meme-item');

      const img = document.createElement('img');
      img.src = meme.url;

      const titulo = document.createElement('p');
      titulo.textContent = meme.name;

      div.appendChild(img);
      div.appendChild(titulo);
      contenedor.appendChild(div);
    }
  }
}

obtenerMemes();
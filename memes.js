async function mostrarMemes(cantidad) {
  const url = `https://meme-api.com/gimme/${cantidad}`;

  try {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    const memes = datos.memes || [datos]; // Puede ser 1 meme o varios
    const contenedor = document.getElementById('meme-container');
    contenedor.innerHTML = '';

    memes.forEach(meme => {
      const div = document.createElement('div');
      div.classList.add('meme-item');

      const img = document.createElement('img');
      img.src = meme.url;

      const titulo = document.createElement('p');
      titulo.textContent = meme.title;

      div.appendChild(img);
      div.appendChild(titulo);
      contenedor.appendChild(div);
    });

  } catch (error) {
    console.error('Error al obtener memes:', error);
    alert("Hubo un problema al cargar los memes.");
  }
}
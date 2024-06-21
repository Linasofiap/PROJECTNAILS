const imagenPrincipal = document.getElementById('imagen-principal');
const imagenes = [
    'ruta-de-la-imagen-1.jpg',
    'ruta-de-la-imagen-2.jpg',
    ]
    let indiceImagenActual = 0;
    imagenPrincipal.addEventListener('click', function() {
        indiceImagenActual = (indiceImagenActual + 1) % imagenes.length;
        imagenPrincipal.src = imagenes[indiceImagenActual];
    });
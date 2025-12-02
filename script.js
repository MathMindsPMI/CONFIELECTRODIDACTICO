function abrir(seccion) {
    fetch(seccion + ".json")
        .then(r => r.json())
        .then(data => {
            document.getElementById("contenido").innerHTML = `
                <h2>${data.titulo}</h2>
                <p>${data.descripcion}</p>
            `;
        })
        .catch(() => {
            document.getElementById("contenido").innerHTML = "Error al cargar contenido.";
        });
}

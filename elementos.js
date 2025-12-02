// Archivos JSON simulados
const contenido = {
    instalaciones: { titulo: "Instalaciones Eléctricas", descripcion: "Información básica sobre instalaciones." },
    herramientas: { titulo: "Herramientas", descripcion: "Tipos de herramientas eléctricas." },
    materiales: { titulo: "Materiales", descripcion: "Materiales usados en electricidad." },
    protecciones: { titulo: "Protecciones", descripcion: "Protecciones eléctricas comunes." },
    diagramas: { titulo: "Diagramas", descripcion: "Diferentes tipos de diagramas eléctricos." },
    colores: { titulo: "Código de Colores", descripcion: "Identificación por colores." },
    practicas: { titulo: "Prácticas", descripcion: "Actividades y prácticas eléctricas." }
};

// Para permitir fetch usando archivos
for (let key in contenido) {
    const blob = new Blob([JSON.stringify(contenido[key])], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    fetch(key + ".json", { method: "PUT", body: blob });
}

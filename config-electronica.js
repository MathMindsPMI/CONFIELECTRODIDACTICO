const configElectronica = {
    titulo: "Configuración Electrónica",
    descripcion: "Ajustes relacionados con componentes, valores, modos y calibración."
};

const blobConfig = new Blob([JSON.stringify(configElectronica)], { type: "application/json" });
fetch("config-electronica.json", { method: "PUT", body: blobConfig });

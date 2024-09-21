const express = require('express');
const path = require('path');  // Agregar esta línea

const app = express();

// Definir la carpeta 'html' como la carpeta de archivos estáticos
app.use(express.static(path.join(__dirname, 'html')));

// Servir el archivo index.html desde la carpeta 'html'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

// Iniciar el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${3000}`);
});


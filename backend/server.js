const express = require('express');
const cors = require('cors');
const app = express();

// IMPORTANTE: En Docker con Nginx, fijamos el puerto interno.
// No usamos process.env.PORT aquí para que no choque con Nginx.
const INTERNAL_PORT = 3000; 

app.use(express.json());
app.use(cors());

// Esta ruta coincide perfectamente con el 'location /api/' de tu nginx.conf
app.post('/api/saludar', (req, res) => {
    const { nombre } = req.body;
    console.log(`Petición recibida en App 4: ${nombre}`);
    res.json({ 
        mensaje: `¡Hola ${nombre}! Respuesta exitosa desde el Backend (vía Nginx)`
    });
});

// Escuchamos siempre en el 3000 internamente
app.listen(INTERNAL_PORT, '0.0.0.0', () => {
    console.log(`🚀 Backend interno corriendo en puerto ${INTERNAL_PORT}`);
});
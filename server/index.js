//Variables .env
require('dotenv').config();

//Importamos las dependencias necesarias.
const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const morgan = require('morgan');

// Importamos las rutas.
const userRoutes = require('./src/routes/userRoutes');
const entriesRoutes = require('./src/routes/entriesRoutes');

//Creamos el servidor.
const app = express();

//Evita problemas con el cliente
app.use(cors());

// Configura el middleware para servir archivos estáticos desde la carpeta 'uploads'
app.use(express.static(process.env.UPLOADS_DIR));

//Middleware que deserializa un body en formato raw creando la propiedad body en el objeto request.
app.use(express.json());

//Middleware que deserializa un body en formato form-data creando la propiedad body en el objeto request
// y la propiedad files.
app.use(fileUpload());

//Middleware de petición entrante (morgan)
app.use(morgan('dev'));

// Middleware que indica a express donde se encuentran las rutas de los usuarios y los tweets.
app.use(userRoutes);
app.use(entriesRoutes);
/**
 * ##############################
 * ## Middlewares importantes ##
 * ############################
 */

//Middleware de error.
app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.httpStatus || 500).send({
    status: 'error',
    message: err.message,
  });
});

//Middleware de ruta no encontrada.
app.use((req, res) => {
  res.status(404).send({
    status: 'error',
    message: 'Ruta no encontrada',
  });
});

//Middleware escucha peticiones al puerto 8000
app.listen(process.env.PORT, () => {
  console.log(`Server listening at http://localhost:${process.env.PORT}`);
});

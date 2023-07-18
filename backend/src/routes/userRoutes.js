const express = require('express');
const router = express.Router();

//Porque estamos importando esto si no tiene uso?

// Importamos los middlewares personalizados.
const authUser = require('../middlewares/authUser');
const userExists = require('../middlewares/userExists');
const authUserOptional = require('../middlewares/authUserOptional');

const { newUser, loginUser, getUser } = require('../controllers/users/index');

//Registro de usuario

router.post('/users', newUser);

// Login de usuario.
router.post('/users/login', loginUser);

//Obtener información de mi usuario.
router.get('/users/:userId', getUser);

module.exports = router;

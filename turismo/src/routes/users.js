var express = require('express');
const USERS = require('../controllers/users');
var ROUTER = express.Router();


/* Ruta de Servicios */
ROUTER.get('/servicios', USERS.servicios);

/* Ruta de Nosotros. */
ROUTER.get('/nosotros', USERS.nosotros);

module.exports = ROUTER;

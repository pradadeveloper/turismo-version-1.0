var express = require('express');
var ROUTER = express.Router();
const MAIN = require('../controllers/main');


/* Renderizar el HOME */
ROUTER.get('/', MAIN.index);


module.exports = ROUTER;

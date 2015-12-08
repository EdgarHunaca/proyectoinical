var express = require('express');
var router = express.Router();
var contacto = require ('../controllers/contacto');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'EDGAR' });
});

router.get('/registroContacto',contacto.registroContacto);
router.get('/respuestaContacto',contacto.respuestaContacto);

module.exports = router;

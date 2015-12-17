

var models = require('../models/model.js');

exports.registroContacto = function (req, res){
	var contacto = models.Contacto.build({ nombres: "Nombre",
									apellidoPaterno: "Paterno",
									apellidoMaterno: "Materno",
									telefonoPersonal: 0,
									telefonoDomicilio: 0,
									cumpleanos: new Date()});

	res.render('registroContacto', {title:'registro de Contacto', contacto: contacto});
}

exports.respuestaContacto = function (req, res){
	res.render('respuestaContacto', {mensaje:'Se registro el contacto'});
}


exports.guardarContacto = function (req,res){
	var contacto = models.Contacto.build(req.body.contacto);

    contacto.save	({fields:["nombres",
    					  "apellidoPaterno",
    					  "apellidoMaterno",
    					  "telefonoPersonal",
    					  "telefonoDomicilio",
    					  "cumpleanos"
    					  ]
    			 }).then(function(){
    			 	console.log("ingresa a redirectorio");
    			 	res.redirect('/');
    			 });  	
}

exports.index = function (req, res, next){
	models.Contacto.findAll().then(function(contactos){
		 res.render('index',{title: 'Avances en computacion',contactos: contactos});
	})
}


//Registro de Contacto
//verificar si es un contacto correcto
//req = peticion
//res = respuesta
//var models = require('../models/model.js');

//exports.registroPost = function (req, res){
//	var post = models.Posts.build({ nombres: "Nombres",
//									post: "post"
//									});

//	res.render('registroPost', {titulo:'Registro de Post', post: post});
//}
//exports.guardarPost = function (req, res){
//	res.render('guardarPost', {titulo:'Registro de Post', mensaje: 'Post Recibido'});
//}

//escribir el codigo para devolver respuesta

//Escribir el codigo para guardar los datos

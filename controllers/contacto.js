

var models = require('../models/model.js');

exports.registroContacto = function (req, res){
	var agenda = models.Contacto.build({ nombres: "Nombre",
									apellidoPaterno: "Paterno",
									apellidoMaterno: "Materno",
									telefonoPersonal: 0,
									telefonoDomicilio: 0,
									cumpleanos: new Date()});

	res.render('registroContacto', {title:'Registro de Contacto', agenda: agenda});
}

exports.respuestaContacto = function (req, res){
	res.render('respuestaContacto', {mensaje:'Se registro el contacto'});
}

exports.guardarContacto = function(req, res){
	console.log("ingresa a guardar"+req.body.contacto);

	var contacto = models.Contacto.build ({
		nombres: req.body.contacto.nombres
	})
    //a continuacion guardamos los campos que recibimos del formulario
    (req.body.contacto);
    contacto.save	({fields:["nombres",
    					  "apellidoPaterno",
    					  "apellidoMaterno",
    					  "telefonoPersonal",
    					  "telefonoDomicilio",
    					  
    					  ]
    			 }).then(function(){
    			 	console.log("ingresa a redirecr");
    			 	res.render('respuestaContacto', {mensaje:'Se registro el contacto con exito'});
    			 });  	
}

exports.index = function (req, res, next){
	models.Contacto.findAll().then(function(contactos){
		 res.render('index',{title: 'Avances en computacion',contactos: contactos});
	})
}


//exports.respuestaContacto = function (req,res){
//	res.render('respuestaContacto',{mensaje:'se registro el contacto'});
//}

//exports.registroContacto = function (req,res){
//	res.render('registro',{titulo:'registro de contacto'});
//}



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

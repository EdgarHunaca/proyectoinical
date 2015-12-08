



exports.respuestaContacto = function (req,res){
	res.render('respuestaContacto',{mensaje:'se registro el contacto'});
}

exports.registroContacto = function (req,res){
	res.render('registro',{titulo:'registro de contacto'});
}
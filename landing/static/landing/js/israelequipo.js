$( document ).ready(function() {

	$.getJSON("cargar_equipo",function(data) {

		$(".containerCoordinador").append(
			$("<div>",{"class":"panel-body"}).append(
				$("<div>", {"class": "imagenProfesor"}).append(
					$("<img>",{"class":"equipo-foto","src":data.coordinador.foto,"alt":data.coordinador.nombre})),
				$("<div>",{"class":"detalleProfesor"}).append(
					$("<h3>",{"class":"clr-light-blue","text":data.coordinador.nombre}),
					$("<a>",{"text":data.coordinador.mail, "href":"mailto:"+data.coordinador.mail})
					)
				)
			)



///PROFESORES
var $flag1 = 0;

for(var i in data.profesores) {

	$("#Profesores").append(
		$("<div>", {"class": "col-md-6 col-xs-12 pb-15 pl-0"}).append(
			$("<div>",{"class":"imagenProfesor"}).append(
				$("<img>",{"class":"equipo-foto","src":data.profesores[i].foto,"alt":data.profesores[i].nombre})),
			$("<div>",{"class":"detalleProfesor"}).append(
				$("<h3>",{"class":"clr-light-blue", "text":data.profesores[i].nombre}),
				$("<a>",{"text":data.profesores[i].mail, "href":"mailto:"+data.profesores[i].mail})
				)
			)
		)

}
///AYUDANTES

for(var i in data.ayudantes.TA) {
	$("#Ayudantes").append(
		$("<div>",{"class":"col-xs-12 col-sm-3 col-md-3"}).append(
			$("<div>", {"class":"panel panel-default"}).append(
				$("<div>",{"class":"panel-body"}).append(
					$("<h4>",{"text":data.ayudantes.TA[i].nombre}),
					$("<a>",{"text":data.ayudantes.TA[i].correo,"href":"mailto:"+data.ayudantes.TA[i].correo})           
					)
				)  
			)     
		)     
}

});

});
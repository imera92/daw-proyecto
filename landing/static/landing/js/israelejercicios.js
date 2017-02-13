$(window).load(function() {

	if ($("#practice").length){
		load_ejercicio();
	};
	

});

function load_ejercicio(){
	$.getJSON( 'cargar_listaDeEjercicios', function(rest) {

		for (var i in rest.ejercicios) {
			console.log(i);

			$(".list-group").append(
				$("<div>",{"class":"list-group-item mb-15"}).append(
					$("<div>", {"class": "row"}).append(
						$("<div>", {"class": "col-md-10"}).append(
							$("<h4>",{"class":"list-group-item-heading tit-list-eje","text":rest.ejercicios[i].titulo}).append(),
							$("<div>",{"class":"list-group-item-text pb-5"}).append(
								$("<span>",{"text":"Dificultad: "+rest.ejercicios[i].nivel }).append(),
								$("<span>",{"class":"pl-20", "text":"Veces Resuelto: "+rest.ejercicios[i].resuelto}).append()
												
								)
						),
						$("<div>", {"class": "col-md-2 col-sm-6 col-xs- 6 solve-col"}).append(
							$("<a>",{"class":"btn btn-default diff-btn solve-btn", "href":"ejercicio", "text":"Ver"})
							)
						
						
					),
					$("<div>", {"class": "row"}).append(
						$("<div>", {"class": "col-md-10"}).append(
							$("<span>",{"class":"label label-default","text":rest.ejercicios[i].etiquetas[0].etiqueta1}).append(),
								$("<span>",{"class":"label label-default","text":rest.ejercicios[i].etiquetas[1].etiqueta1}).append()	),
						$("<div>", {"class": "col-md-2"}).append(
						
							)
						)

					)

				)
		}
	});
}
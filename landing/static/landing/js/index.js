$(window).load(function(){
	if ($("#typo").length){
		$("#typo").type("Fundamentos de Programación", 500);
		animText();
		$("#owl-landing-1").owlCarousel({
			autoPlay: 10000,
			navigation : false, // Show next and prev buttons
			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem:true
		});
	}

	if ($("#practice").length){
		console.log("rest");
		load_ejercicio();
		console.log("World");
		load_edicion();
	};
});

/* FUNCIONES PARA LA ANIMACION DEL TEXTO EN HEADER */

/* Inicializacion de la animacion
* @element es el contenedor del texto a animar. Inicialmente debe estar vacio
* @text es el texto que vamos a animar
* @delay es el tiempo de espera antes de empezar la animacion */
jQuery.fn.type = function(text, delay) {
	var element = $(this);
	setInterval('cursorAnimation()', 100);
	setTimeout(function() { anim(element, text); }, delay);
}
/* Animacion del cursor*/
function cursorAnimation() {
	if ($("#cursor").length){
		$("#cursor").animate({
			opacity: 0
		}, 'fast', 'swing').animate({
			opacity: 1
		}, 'fast', 'swing');
	}
}
/* Animacion del titulo */
function anim(element, text) {
	if ($(element).html().length < text.length) {
		$(element).html(text.substring(0, ($(element).html().length + 1)));
		setTimeout(function() {
			anim(element, text);
		}, 100);
	}
}
/* Animacion del texto */
function animText(){
	$('.header-text').animate({opacity: 1}, 'slow', 'linear');
}

/* Carga de JSON para pagina de proyectos */
function loadProject(){
	$("#up-proj").empty();
	$.getJSON("cargar_proyectos", function(ans){
		var projects = ans.proyectos;
		for(i = 0; i<projects.length; i++){
			//console.log("ans");
			var $panel = $("<div>", {"class":"well project-panel"});
			var $title = $("<h4>",  {"class":"bold"});
			var $link = $("<a>", {"data-toggle": "modal", "data-target": "#proj-info"+i});
			$link.text(projects[i].titulo);
			$title.append($link);
			$panel.append($title);
			$("#up-proj").append($panel);
			var $modal = $("<div>",{"id":"proj-info"+i, "class":"modal fade", "role":"dialog"});
			var $modalDialog = $("<div>", {"class":"modal-dialog"});
			var $modalContent = $("<div>", {"class":"modal-content"});
			var $modalHeader = $("<div>", {"class":"modal-header"});
			var $modalTitle = $("<h4>", {"class":"modal-title"});
			$modalTitle.text(projects[i].titulo);
			var $modalBody = $("<div>", {"class":"modal-body"});
			var $modalFooter = $("<div>", {"class":"modal-footer"});
			var url = projects[i].url;
			var $downloadButton = $("<a>", {"href":url, "class":"btn btn-default", "target":"_blank"});
			$downloadButton.text("Descargar");
			var $closeButton = $("<button>", {"type":"button", "class":"btn btn-default", "data-dismiss":"modal"});
			$closeButton.text("Cerrar");
			$modalFooter.append($downloadButton);
			$modalFooter.append($closeButton);
			$modalBody.text(projects[i].descripcion);
			$modalHeader.append($modalTitle);
			$modalContent.append($modalHeader);
			$modalContent.append($modalBody);
			$modalContent.append($modalFooter);
			$modalDialog.append($modalContent);
			$modal.append($modalDialog);
			$("#up-proj").append($modal);
		}
	});
}

function load_ejercicio(){
	$.getJSON('cargar_listaDeEjercicios', function(rest) {

		for (var i in rest.ejercicios) {
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
						$("<div>", {"class": "col-md-2 solve-col"}).append(
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

function filtrarEjercicios(dificultad){
	$(".list-group").empty();
	$.getJSON( 'cargar_listaDeEjercicios', function(rest) {

		for (var i in rest.ejercicios) {
			if (rest.ejercicios[i].nivel != dificultad){
				continue;
			}
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
						$("<div>", {"class": "col-md-2 solve-col"}).append(
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

function load_edicion(){
    $.getJSON('cargar_listaDeEjercicios', function(rest) {
        for (var i in rest.ejercicios) {
            if (rest.ejercicios[i].autor != "Marcos Calderón"){
                continue;
            }
            $("#mios").append(
                $("<div>",{"class":"list-group-item mb-15"}).append(
                    $("<div>", {"class": "row"}).append(
                        $("<div>", {"class": "col-md-10"}).append(
                            $("<h4>",{"class":"list-group-item-heading tit-list-eje","text":rest.ejercicios[i].titulo}).append(),
                            $("<div>",{"class":"list-group-item-text pb-5"}).append(
                                $("<span>",{"text":"Dificultad: "+rest.ejercicios[i].nivel }).append(),
                                $("<span>",{"class":"pl-20", "text":"Veces Resuelto: "+rest.ejercicios[i].resuelto}).append()
                                                
                                )
                        ),
						$("<div>", {"class": "col-md-2 solve-col"}).append(
							$("<a>",{"class":"btn btn-default diff-btn solve-btn", "href":"ejercicionuevo", "text":"Editar"})
							),
                        $("<div>", {"class": "col-sm-2 solve-col"}).append(
                            $("<button>",{"class":"btn btn-default diff-btn solve-btn", "href":"#", "text":"Eliminar"})
                            )
                        
                    ),
                    $("<div>", {"class": "row"}).append(
                        $("<div>", {"class": "col-md-10"}).append(
                            $("<span>",{"class":"label label-default","text":rest.ejercicios[i].etiquetas[0].etiqueta1}).append(),
                                $("<span>",{"class":"label label-default","text":rest.ejercicios[i].etiquetas[1].etiqueta1}).append()   ),
                        $("<div>", {"class": "col-md-2"}).append(
                        
                            )
                        )

                    )

                )
        }
    });
}    

function mensajeDeExito(){
	$("#exitoejercicio").empty();
	$("#exitoejercicio").append('<div class="alert alert-success"><strong>Enhorabuena!</strong> Has resuelto el ejercicio.</div>')
}
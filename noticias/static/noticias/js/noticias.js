$(document).ready(function(){
	cargarNoticias();
});

// Devuelve la URL base del sitio web
function getBaseUrl(){
	var getUrl = window.location;
	var baseUrl = getUrl .protocol + "//" + getUrl.host + "/";
	return baseUrl;
}

// Carga todas las noticias en la pagina
function cargarNoticias(){
	$('#noticias').empty();
	var noticias = 0;
	var base = getBaseUrl();
	var $titulo_seccion = $('<h1 class="align-center"> Noticias y Anuncios </h1>');
	var $descripcion_seccion = $('<p class="pt-20 align-center">En esta sección podrán encontrar las últimas noticias, anuncios y novedades respecto al curso.</p>');
	$('#noticias').append($titulo_seccion);
	$('#noticias').append($descripcion_seccion);
	$.getJSON(base + 'api/noticias/?format=json', function(ans){
		for(i=0; i<ans.length; i++){
			var $noticia_col = $(
				'<div>',
				{
					'class' : 'col-md-4'
				}
			);
			var $noticia_container = $(
				'<div>',
				{
					'class' : 'noticia-container'
				}
			);
			var $titulo = $(
				'<span>',
				{
					'class' : 'noticia-prev-titulo'
				}
			);
			var $fecha = $(
				'<span>',
				{
					'class' : 'noticia-fecha'
				}
			);
			var $boton = $(
				'<button>',
				{
					'class' : 'btn standard-btn mt-20'
				}
			)
			$boton.val(ans[i].id);
			$boton.text('Leer más');
			$boton.click(function(){
				$.getJSON(base + 'api/noticias/' + $(this).val() + '/?format=json', function(ans){
					$('#noticias').empty();
					var $row = $(
						'<div>',
						{
							'class' : 'row pb-20'
						}
					);
					var $noticia_header = $(
						'<div>',
						{
							'class' : 'pb-20'
						}
					);
					var $titulo = $(
						'<h1>',
						{
							'class' : 'align-left noticia-titulo'
						}
					);
					var $fecha = $(
						'<span>',
						{
							'class' : 'noticia-fecha'
						}
					);
					var $cuerpo = $(
						'<div>',
						{
							'class' : 'col-md-6 col-md-offset-3'
						}
					);
					var $boton_container = $(
						'<div>',
						{
							'class' : 'col-md-1'
						}
					);
					var $boton = $(
						'<button>',
						{
							'class' : 'btn standard-btn close-btn mt-20 mb-20'
						}
					);
					$titulo.text(ans.titulo);
					$fecha.text('Publicado: ' + ans.fecha);
					$boton.text('X');
					$boton.click(function(){
						cargarNoticias();
					});
					var str = ans.descripcion;
					$html = $(str);
					$html.find('img').addClass('img-responsive');
					$noticia_header.append($titulo);
					$noticia_header.append($fecha);
					$cuerpo.append($noticia_header);
					$cuerpo.append($html);
					$boton_container.append($boton);
					$row.append($cuerpo);
					$row.append($boton_container);
					$('#noticias').append($row);
					// $('#noticias img').addClass('img-responsive');
				});
			});
			$titulo.text(ans[i].titulo);
			$fecha.text(ans[i].fecha);
			$noticia_container.append($titulo);
			$noticia_container.append('<br>');
			$noticia_container.append($fecha);
			$noticia_container.append('<br>');
			$noticia_container.append($boton);
			$noticia_col.append($noticia_container);

			if(i == 0 || (noticias % 3) == 0){
				$row = $(
					'<div>',
					{
						'class' : 'row pt-20'
					}
				);
				$row.append($noticia_col);
				$row.css({
					'display' : 'none'
				});
				$('#noticias').append($row);
			}else{
				$('#noticias>.row:last-child').append($noticia_col);
			}
			noticias++;
		}
		$('#noticias .row').fadeIn(500);
		$separator = $(
			'<div>',
			{
				'class' : 'pb-50'
			}
		);
		$('#noticias').append($separator);
	});
}
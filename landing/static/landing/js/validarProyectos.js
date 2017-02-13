$( document ).ready(function() {
	//$("#proyectos-header .alert").css({"opacity": "1", "transition": "all 0.25s"});
	var validarTitulo = /[A-Z]+[a-z]+.([aA0-zZ9]*.[aA0-zZ9])*/;
	var valTagk =  /^[a-zA-Z]+$/;
	var valDesk = /^[a-zA0-Z9]+\s([a-zA0-Z9]+\s*)*/;
	$("#botonvalidacion").click( function() {
		// $("#proyectos-header .alert").css({"opacity": "1", "transition": "all 0.25s"});
		if ( $(".validarTitulo").val() == "" || !validarTitulo.test($(".validarTitulo").val()) ) {
			$(".validarTitulo").focus().after("<span class='error'>Ingrese un Titulo Válida</span>");
            return false;
		}if ( $(".validarDesc").val() == "" || !valDesk.test($(".validarDesc").val())) {
			$(".validarDesc").focus().after("<span class='error'>Su Descripcion no es válida</span>");
            return false;
		}if ( $(".validarDate").val() == "" ) {
			$(".validarDate").focus().after("<span class='error'>Escoja una fecha</span>");
            return false;
		}if ( $(".validarTags").val() == "" || !valTagk.test($(".validarTags").val())) {
			$(".validarTags").focus().after("<span class='error'>Ingrese un Tag válido</span>");
            return false;
		}
	});
	 $(".validarTitulo, .validarDesc, .validarDate, .validarTags ").keyup(function(){
        if( $(this).val() != "" ){
            $(".error").fadeOut();
            return false;
        }
    });
  
});

 
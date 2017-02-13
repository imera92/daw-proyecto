$( document ).ready(function() {
	var validarTitulo = /[A-Z]+[a-z]+.([aA0-zZ9]*.[aA0-zZ9])*/;
	var validarTagsss =  /^[a-zA-Z]+$/;
	var validarDescripcionk = /^[a-zA0-Z9]+\s([a-zA0-Z9]+\s*)*/;
	$("#botonvalidacionx").click( function() {
		if ( $(".validarTitulox").val() == "" || !validarTitulo.test($(".validarTitulox").val()) ) {
			$(".validarTitulox").focus().after("<span class='error'>Ingrese un Titulo Válido</span>");
            return false;
		}if ( $(".validarDescx").val() == ""  || !validarDescripcionk.test($(".validarDescx").val()) ) {
			$(".validarDescx").focus().after("<span class='error'>Su Descripcion no es válida</span>");
            return false;
		}if ( $(".validarEntrada").val() == "" ) {
			$(".validarEntrada").focus().after("<span class='error'>Su Formato de Entrada no es válido</span>");
            return false;
		}if ( $(".validarSalida").val() == "" ) {
			$(".validarSalida").focus().after("<span class='error'>Su Formato de salida no es válido</span>");
            return false;
		}if ( $(".validarEjemEn").val() == "" ) {
			$(".validarEjemEn").focus().after("<span class='error'>Su Ejemplo de Entrada no es válido</span>");
            return false;
		}if ( $(".validarEjemSa").val() == "" ) {
			$(".validarEjemSa").focus().after("<span class='error'>Su Ejemplo de Salida no es válido</span>");
            return false;
		}if ( $(".editorValidar").val() == "" ) {
			$(".editorValidar").focus().after("<span class='error'>Su Descripcion no es válida</span>");
            return false;
		}if ( $(".casodeprueba1").val() == "" ) {
			$(".casodeprueba1").focus().after("<span class='error'>Su Caso de Prueba de Entrada no es  válido</span>");
            return false;
		}if ( $(".casodeprueba2").val() == "" ) {
			$(".casodeprueba2").focus().after("<span class='error'>Su Caso de Prueba de Salida no es válido</span>");
            return false;
		}if ( $("select option:selected").val() == "" ) {
			$("select").focus().after("<span class='error'>Seleccione el nivel de dificultad</span>");
            return false;
		}if ( $(".validarTagx").val() == "" || !validarTagsss.test( $(".validarTagx").val() ) ) {
			$(".validarTagx").focus().after("<span class='error'>Ingrese una etiqueta válida</span>");
            return false;
		}


	});
	 $(".validarTitulox, select,.validarTagx, .validarDescx, .validarEntrada, .validarSalida, .validarEjemEn, .validarEjemSa,.editorValidar,.casodeprueba1,.casodeprueba2 ").keyup(function(){
        if( $(this).val() != "" ){
            $(".error").fadeOut();
            return false;
        }
    });
  
});

 
dias = ["Lunes","Martes","Miercoles","Jueves","Viernes"]
divs = ["collapseOne","collapseTwo","collapseThree","collapseFour","collapseFive"]
$(document).ready(function(){
    if ($("#ayudantias").length){buscar();}
});

function buscar(){
    var url = "";
    $.getJSON("cargar_equipo", function(resp){
        var ayudantes = resp.ayudantes.TA;
        for (i = 0; i<dias.length; i++){
            var dia = dias[i];
            for (j=0; j<ayudantes.length; j++){
                var ayudante = ayudantes[j]
                var horarios = ayudante.horarios
                for (z=0; z<horarios.length; z++){
                    if (horarios[z].dia == dia){
                        var nombre = ayudante.nombre;
                        var aula = ayudante.horarios[z].aula;
                        if (aula == "SP-01"){
                            var modalId = "labs";
                        }
                        if (aula.includes("CIB")){
                            var modalId = "cib";
                        }
                        if (aula.includes("24A") || aula.includes("Sala")){
                            var modalId = "fiec"
                        }

                        var hora = ayudante.horarios[z].hora;
                        var dia = ayudante.horarios[z].dia;
                        $("#"+divs[i]+" > .panel-body").append(
                            $("<div>", {"class":"row pt-5"}).append(
                                $("<div>", {"class":"col-md-3"}).append(
                                    $("<p>", {"text":nombre})
                                ),                            
                                $("<div>", {"class":"col-md-3"}).append(
                                    $("<p>", {"text":hora})
                                ),                         
                                $("<div>", {"class":"col-md-3"}).append(
                                    $("<p>", {"text":aula})
                                ),     
                                $("<div>", {"class":"col-md-3"}).append('<button type="button" class="btn btn-primary btn-ubicacion" data-toggle="modal" data-target="#'+modalId+'">Ver Ubicación</button>') 
                            )
                        )
                    }                            
                }
            }
        }
    });
}
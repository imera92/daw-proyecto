function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function pagination(evt, page) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("pagecontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("pagelinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(page).style.display = "block";
    evt.currentTarget.className += " active";
}

$( document ).ready(function() {
    if ($("#practicar1").length){
        load_ejercicios();
        load_edicion();
    };
});

function crear_ejercicio(){
    var titulo = $("#titulo").val();
    var res = $("#resumen").val();
    var desc = $("#desc").val();
    var dificultad = $("#dif").val();
    var entrada = $("#ent").val();
    var salida = $("#exit").val();
    var tags = $("#tags").val().split(",");
    var nivel = "Medio"
    if (dificultad < 4){
        nivel = "Fácil";
    }
    if (dificultad > 6){
        nivel = "Dificil";
    }
    var ejercicio = {"titulo": titulo,
        "descripcion": res,
        "texto":desc,
        "autor": "Leonardo Kuffo",
        "inputsFormato": entrada,
        "outputFormato": salida,
        "constantes": "",
        "ejemploEntrada": "",
        "ejemploSalida" : "",
        "nivel": "Fácil",
        "resuelto": 0,
        "etiquetas": [{"etiqueta1":tags[0]},{"etiqueta1":tags[1]}]
    }

    $.getJSON('ejercicios.json', function(rest){
        const fs = require('fs');
        var file_content = rest;
        file_content.ejercicios.push(ejercicio);
        fs.writeFile("ejercicios2.json", JSON.stringify(file_content, null, 2));
    });
}



function load_ejercicios(){
    j = 0
    $.getJSON('cargar_listaDeEjercicios', function(rest) {
        for (var i in rest.ejercicios) {
            if (i == 0 || i % 5 == 0){
                if (j == 0){
                    var display = "block;";
                }else{
                    var display = "none;";
                }
                j+=1
                var id = j.toString();
                $(".pagination").append(
//<li><a href="javascript:void(0)" class="tablinks" onclick="openCity(event, 'ver_ejercicios')">Ver Ejercicios</a></li>
                    $("<li>").append(
                        $("<a>", {"class": "pagelinks", "href": "javascript:void(0)", "onclick": "pagination(event, "+id+")", "text": id})
                        )
                    )
                $("#ver").append(
                    $("<div>", {"class": "pagecontent", "id": id, "style":"display: "+display})
                    )
            }
            $("#"+id).append(
                $("<div>",{"class":"list-group-item mb-15"}).append(
                    $("<div>", {"class": "row"}).append(
                        $("<div>", {"class": "col-md-10"}).append(
                            $("<h4>",{"class":"list-group-item-heading tit-list-eje","text":rest.ejercicios[i].titulo}).append(),
                            $("<div>",{"class":"list-group-item-text pb-5"}).append(
                                $("<span>",{"text":"Dificultad: "+rest.ejercicios[i].nivel }).append(),
                                $("<span>",{"class":"pl-20", "text":"Veces Resuelto: "+rest.ejercicios[i].resuelto}).append()
                                                
                                )
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

function load_edicion(){
    $.getJSON( 'cargar_listaDeEjercicios', function(rest) {
        for (var i in rest.ejercicios) {
            if (rest.ejercicios[i].autor != "Marcos Calderón"){
                continue;
            }
            $("#editar").append(
                $("<div>",{"class":"list-group-item mb-15"}).append(
                    $("<div>", {"class": "row"}).append(
                        $("<div>", {"class": "col-md-10"}).append(
                            $("<h4>",{"class":"list-group-item-heading tit-list-eje","text":rest.ejercicios[i].titulo}).append(),
                            $("<div>",{"class":"list-group-item-text pb-5"}).append(
                                $("<span>",{"text":"Dificultad: "+rest.ejercicios[i].nivel }).append(),
                                $("<span>",{"class":"pl-20", "text":"Veces Resuelto: "+rest.ejercicios[i].resuelto}).append()
                                                
                                )
                        ),
                        $("<div>", {"class": "col-sm-1 solve-col"}).append(
                            $("<button>",{"class":"btn btn-default diff-btn solve-btn", "href":"ejercicio", "text":"Editar"})
                            ),
                        $("<div>", {"class": "col-sm-1 solve-col"}).append(
                            $("<button>",{"class":"btn btn-default diff-btn solve-btn", "href":"ejercicio", "text":"Eliminar"})
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

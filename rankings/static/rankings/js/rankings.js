$(document).ready(function(){
	cargarEstudiantes();
});

function cargarEstudiantes(){
	$.getJSON('http://localhost:4000/djangorank', function(ans){
		var $row = $(
			'<div>',
			{
				'class' : 'row pt-20'
			}
		);
		for(i=0; i<ans.length; i++){
			var $col = $(
				'<div>',
				{
					'class' : 'col-md-4'
				}
			);
			var $well = $(
				'<div>',
				{
					'class' : 'well'
				}
			)
			var $name = $('<h3><span class="bold">Matrícula: </span>' + ans[i].matricula + '</h3>');
			var $score = $('<h3><span class="bold">Puntaje: </span>' + ans[i].puntaje + '</h3>');
			$well.append($name);
			$well.append($score);
			$col.append($well);
			$row.append($col);
		}
		$('#rankings').append($row);
	})
}
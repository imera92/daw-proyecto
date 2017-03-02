from django.shortcuts import render
from .models import Curso, Seccion

# Create your views here.
def curso(request):
	curso = Curso.objects.get(id=1)
	secciones = Seccion.objects.order_by('indice')
	context = {
		'descripcion' : curso.descripcion,
		'secciones' : secciones,
	}
	return render(request, 'curso/curso.html', context)
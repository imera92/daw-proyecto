from django.shortcuts import render
from .models import Curso

# Create your views here.
def curso(request):
	curso = Curso.objects.get(id=1)
	context = {
		'descripcion' : curso.descripcion,
	}
	return render(request, 'curso/curso.html', context)
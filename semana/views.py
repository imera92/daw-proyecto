from django.shortcuts import render
from .models import *

def index(request):
	descripcion = Curso.objects.get(id=1).descripcion
	planes = Plan.objects.all()
	recursos = Recurso.objects.all()
	context = {
		'descripcion' : descripcion,
		'planes' : planes,
		'recursos' : recursos,
	}
	return render(request, 'semana/semana.html', context)

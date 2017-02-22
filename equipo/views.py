from django.shortcuts import render
from .models import *
from ayudantias.models import Ayudantes

# Create your views here.
def index(request):
	coordinador = Coordinadores.objects.get(id=1)
	profesores = Profesores.objects.all()
	ayudantes = Ayudantes.objects.all()
	context = {
		'coordinador' : coordinador,
		'profesores' : profesores,
		'ayudantes' : ayudantes,
	}
	return render(request, 'equipo/equipo.html', context)
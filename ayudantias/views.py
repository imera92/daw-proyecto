from django.shortcuts import render
from .models import *

# Create your views here.
def index(request):
	lun = Ayudantias.object.filter(dia='Lunes')
	mar = Ayudantias.object.filter(dia='Martes')
	mier = Ayudantias.object.filter(dia='Miercoles')
	juev = Ayudantias.object.filter(dia='Jueves')
	vier = Ayudantias.object.filter(dia='Viernes')
	context = {
		'lun' : lun,
		'mar' : mar,
		'mier' : mier,
		'juev' : juev,
		'vier' : vier,
	}
	return render(request, 'ayudantias/ayudantias.html', context)
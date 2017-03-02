from django.shortcuts import render
from .models import *

# Create your views here.
def index(request):
	ayudantias = Ayudantias.objects.all()
	embed = APIembed.objects.all()
	dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes']
	context = {
		'ayudantias' : ayudantias,
		'dias' : dias,
		'embed' : embed,
	}
	return render(request, 'ayudantias/ayudantias.html', context)
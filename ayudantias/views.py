from django.shortcuts import render
from .models import *

# Create your views here.
def index(request):
	ayudantes = Ayudantes.object.all()
	ayudantias = Ayudantias.object.all()
	context = {
		'ayudantes' : ayudantes,
		'ayudantias' : ayudantias,
	}
	return render(request, 'ayudantias/ayudantias.html', context)
from django.shortcuts import render
from .models import Noticia

# Create your views here.
def index(request):
	return render(request, 'noticias/noticias.html')

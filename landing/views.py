from django.shortcuts import render
#from django.http import HttpResponse

# Create your views here.
def index(request):
	return render(request, 'landing/index.html')

def error_404(request):
	return render(request, 'common/error_404.html')
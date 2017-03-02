from rest_framework import viewsets
from .models import Noticia
from .serializers import NoticiaSerializer

class NoticiaViewSet(viewsets.ModelViewSet):
	
	queryset = Noticia.objects.order_by('-fecha')
	serializer_class = NoticiaSerializer
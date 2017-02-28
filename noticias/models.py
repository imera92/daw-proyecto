from django.db import models
from tinymce import models as tinymce_models

# Create your models here.
class Noticia(models.Model):
	titulo = models.CharField(max_length=50)
	fecha = models.DateField(auto_now_add=True)
	descripcion = tinymce_models.HTMLField()

	def __str__(self):
		return self.titulo + ' - ' + self.fecha
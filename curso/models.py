from django.db import models
from tinymce import models as tinymce_models

# Create your models here.
class Curso(models.Model):
	descripcion = models.TextField()

	def __str__(self):
		return self.descripcion

class Seccion(models.Model):
	STATE_CHOICES = (
		("active", "Activo"),
		("inactive", "Inactivo"),
	)
	curso = models.ForeignKey(Curso, on_delete=models.CASCADE)
	nombre = models.CharField(max_length=50)
	descripcion = tinymce_models.HTMLField()
	estado = models.CharField(max_length=8, choices=STATE_CHOICES, blank=False)
	indice = models.PositiveSmallIntegerField()

	def __str__(self):
		return str(self.indice) + ' - ' + self.nombre + ' - ' + self.estado
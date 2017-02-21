from django.db import models

# Create your models here.
class Curso(models.Model):
	descripcion = models.TextField()

	def __str__(self):
		return self.descripcion

class Seccion(models.Model):
	curso = models.ForeignKey(Curso, on_delete=models.CASCADE)
	nombre = models.CharField(max_length=50)
	descripcion = models.TextField()
	estado = models.CharField(max_length=8)

	def __str__(self):
		return str(self.id) + ' - ' + self.nombre
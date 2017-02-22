from django.db import models

# Create your models here.
class Curso(models.Model):
	descripcion = models.TextField()

	def __str__(self):
		return str(self.id)

class Plan(models.Model):
	curso = models.ForeignKey(Curso, on_delete=models.CASCADE)
	nombre = models.CharField(max_length=50)

	def __str__(self):
		return self.nombre

class TipoRecurso(models.Model):
	nombre = models.CharField(max_length=20)
	icono = models.FileField()

	def __str__(self):
		return self.nombre
		
class Recurso(models.Model):
	plan = models.ForeignKey(Plan, on_delete=models.CASCADE)
	tipo = models.ForeignKey(TipoRecurso, on_delete=models.CASCADE)
	nombre = models.CharField(max_length=50)
	archivo = models.FileField(blank=True)
	url = models.URLField(blank=True)

	def __str__(self):
		return str(self.id) + ' - ' + self.nombre +  ' - ' + str(self.tipo)

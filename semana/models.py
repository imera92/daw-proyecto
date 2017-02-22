from django.db import models

# Create your models here.
class Curso(models.Model):
	descripcion = models.TextField()

	def __str__(self):
		return self.descripcion

class Plan(models.Model):
	curso = models.ForeignKey(Curso, on_delete=models.CASCADE)
	nombre = models.CharField(max_length=50)

	def __str__(self):
		return str(self.id) + ' - ' + self.nombre

class TipoRecurso(models.Model):
	nombre = models.CharField(max_length=20)

	def __str__(self):
		return str(self.id) + ' - ' + self.nombre
		
class Recurso(models.Model):
	plan = models.ForeignKey(Plan, on_delete=models.CASCADE)
	tipo = models.ForeignKey(TipoRecurso, on_delete=models.CASCADE)
	nombre = models.CharField(max_length=50)
	url = models.FileField()

	def __str__(self):
		return str(self.id) + ' - ' + self.nombre +  ' - ' + self.tipo

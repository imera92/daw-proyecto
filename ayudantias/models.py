from django.db import models

# Create your models here.
class Ayudantes(models.Model):
	matricula = models.CharField(max_length=9, primary_key=True)
	nombre = models.CharField(max_length=100)
	correo = models.EmailField()

class Aulas(models.Model):
	codigo = models.CharField(max_length=50, primary_key=True)
	latitud = models.FloatField(blank=False)
	longitud = models.FloatField(blank=False)

class Ayudantias(models.Model):
	DAYS_CHOICES = (
		("Lunes", "Lunes"),
		("Martes", "Martes"),
		("Miercoles", "Miercoles"),
		("Jueves", "Jueves"),
		("Viernes", "Viernes"),
	)
	ayudante = models.ForeignKey(Ayudantes, on_delete=models.CASCADE)
	aula = models.ForeignKey(Aulas, on_delete=models.CASCADE)
	dia = models.CharField(max_length=9, choices=DAYS_CHOICES, blank=False)
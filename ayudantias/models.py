from django.db import models

# Create your models here.
class Ayudantes(models.Model):
	matricula = models.CharField(max_length=9, primary_key=True)
	nombre = models.CharField(max_length=100)
	correo = models.EmailField()

	def __str__(self):
		return self.matricula + ' - ' + self.nombre

class Aulas(models.Model):
	codigo = models.CharField(max_length=50, primary_key=True)
	latitud = models.FloatField(blank=False)
	longitud = models.FloatField(blank=False)

	def __str__(self):
		return self.codigo

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
	horaInicio = models.TimeField(verbose_name='Empieza')
	horaFin = models.TimeField(verbose_name='Finaliza')

	def __str__(self):
		return self.ayudante.matricula + ' - ' + self.aula.codigo + ' - ' + self.dia
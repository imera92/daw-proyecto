from django.db import models

# Create your models here.
class Coordinadores(models.Model):
	nombre = models.CharField(max_length=100)
	foto_archivo = models.FileField(blank=True, verbose_name="Foto (Archivo)")
	foto_url = models.URLField(blank=True, verbose_name="Foto (URL)")
	correo = models.EmailField()

	def __str__(self):
		return 'Coord.: ' + self.nombre

class Profesores(models.Model):
	nombre = models.CharField(max_length=100)
	foto_archivo = models.FileField(blank=True, verbose_name="Foto (Archivo)")
	foto_url = models.URLField(blank=True, verbose_name="Foto (URL)")
	correo = models.EmailField()

	def __str__(self):
		return 'Prof.: ' + self.nombre
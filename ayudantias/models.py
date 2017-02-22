from django.db import models

# Create your models here.
class Ayudantes(models.Model):
	matricula = models.CharField(max_length=9, primary_key=True)
	nombre = models.CharField(max_length=100)
	correo = models.EmailField()
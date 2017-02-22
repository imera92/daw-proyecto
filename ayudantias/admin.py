from django.contrib import admin
from .models import Ayudantes, Aulas, Ayudantias

# Register your models here.
admin.site.register(Ayudantes)
admin.site.register(Aulas)
admin.site.register(Ayudantias)
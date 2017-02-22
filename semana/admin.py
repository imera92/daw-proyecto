from django.contrib import admin
from .models import Curso, Plan, TipoRecurso, Recurso

# Register your models here.

admin.site.register(Curso)
admin.site.register(Plan)
admin.site.register(TipoRecurso)
admin.site.register(Recurso)

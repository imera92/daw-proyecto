from django.conf.urls import url
from . import views

app_name = "curso"

urlpatterns = [
	url(r'^$', views.curso, name='index'),
]
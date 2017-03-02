from django.conf.urls import url
from . import views

app_name = "landing"

urlpatterns = [
	url(r'^$', views.index, name='index'),
	url(r'^error-404$', views.error_404, name='error_404'),
]
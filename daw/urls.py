"""daw URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import include, url, handler404
from landing import views as common_views
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter
from noticias.viewsets import NoticiaViewSet

# Creamos un router para registrar nuestros viewsets
router = DefaultRouter()
router.register(r'noticias', NoticiaViewSet)

urlpatterns = [
    url(r'^tinymce/', include('tinymce.urls')),
    url(r'^admin/', admin.site.urls),
    url(r'^', include('landing.urls')),
    url(r'^curso/', include('curso.urls')),
    url(r'^semana/', include('semana.urls')),
    url(r'^equipo/', include('equipo.urls')),
    url(r'^ayudantias/', include('ayudantias.urls')),
    url(r'^noticias/', include('noticias.urls')),
    url(r'^rankings/', include('rankings.urls')),
    url(r'^api/', include(router.urls)), # Vinculamos el router a una URL
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')), # También podemos registrar la GUI del framework para probar la API
]

if settings.DEBUG is True:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

handler404 = common_views.error_404
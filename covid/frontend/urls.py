from django.urls import path
from .views import index

urlpatterns = [
   path('', index),
   path('map', index),
   path('testing', index),
   path('about', index)

]

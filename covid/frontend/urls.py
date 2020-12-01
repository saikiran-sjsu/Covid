from django.urls import path
from .views import index

urlpatterns = [
   path('', index),
   path('donate', index),
   path('testing', index),
   path('about', index),
   path('register', index),
   path('login', index)
]
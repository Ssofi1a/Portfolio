# urls.py in your app
from django.urls import path
from .views import skills_list

urlpatterns = [
    path('skills/', skills_list, name='skills-list'),  # Map to your view
]

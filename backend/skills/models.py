from django.db import models
from django.contrib import admin 

# Create your models here.
class Skills(models.Model):
    name1 = models.CharField(max_length=50)
    name2 = models.CharField(max_length=50)
    name3 = models.CharField(max_length=50)
    name4 = models.CharField(max_length=50)
    name5 = models.CharField(max_length=50)

    def __str__(self):
        return "Name"
    
admin.site.register(Skills)
from django.db import models
from django.contrib import admin
# Create your models here.

class Projects(models.Model):
    project1 = models.ImageField(upload_to='Picture/', null=True)
    project2 = models.ImageField(upload_to='Picture/', null=True)
    project3 = models.ImageField(upload_to='Picture/', null=True)
    project4 = models.ImageField(upload_to='Picture/', null=True)
    project5 = models.ImageField(upload_to='Picture/', null=True)

    def __str__(self):
        return "Projects"

admin.site.register(Projects)
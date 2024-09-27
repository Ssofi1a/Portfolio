from django.db import models
from django.contrib import admin
# Create your models here.

class Favs(models.Model):
    fav_music = models.FileField(upload_to='Music/')
    fav_quote = models.CharField(max_length=500)
    fav_video = models.FileField(upload_to='Video/')
    fav_book = models.CharField(max_length=500)

    def __str__(self):
        return "Favourites"
    
admin.site.register(Favs)
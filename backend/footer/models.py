from django.db import models
from django.contrib import admin

class Footer(models.Model):
    phone = models.CharField(max_length=20) 
    email = models.EmailField(max_length=254)
    github_link = models.URLField(default="https://github.com/")
    linkedin_link = models.URLField(default="https://linkedin.com/")
    instagram_link = models.URLField(default="https://instagram.com/")
    facebook_link = models.URLField(default="https://facebook.com/")

    def __str__(self):
        return f"{self.phone}"

admin.site.register(Footer)
from django.db import models
from django.contrib import admin 

class Banner(models.Model):
    welcome_text = models.CharField(max_length=255, default="Welcome")
    description = models.TextField(default="No description provided", null=False)
    github_link = models.URLField(default="https://github.com/")
    linkedin_link = models.URLField(default="https://linkedin.com/")
    instagram_link = models.URLField(default="https://instagram.com/")
    facebook_link = models.URLField(default="https://facebook.com/")

    def __str__(self):
        return self.welcome_text


admin.site.register(Banner)
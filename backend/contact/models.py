from django.db import models
from django.contrib import admin

class ContactMessage(models.Model):
    name = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)
    message = models.TextField()

    def __str__(self):
        return f"{self.name} {self.surname}"


admin.site.register(ContactMessage)
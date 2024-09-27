from django.contrib import admin
from .models import About

class MyModelAdmin(admin.ModelAdmin):
    fields = ['img', 'desc', 'cv']

admin.site.register(About, MyModelAdmin)
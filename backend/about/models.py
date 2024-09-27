from django.db import models

# Create your models here.
class About(models.Model):
    img = models.ImageField(upload_to='Picture/', null=True)
    desc = models.CharField(max_length=500)
    cv = models.FileField(upload_to='Files/')
    update = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "About Me"
    
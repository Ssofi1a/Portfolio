# from django.db import models
# from django.contrib import admin 

# # Create your models here.
# class Skills(models.Model):
#     name1 = models.CharField(max_length=50)
#     name2 = models.CharField(max_length=50)
#     name3 = models.CharField(max_length=50)
#     name4 = models.CharField(max_length=50)
#     name5 = models.CharField(max_length=50)

#     def __str__(self):
#         return "Name"
    
# admin.site.register(Skills)

from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=20)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Skill' #Category modeli anuny poxvum a Skilli
        verbose_name_plural = 'Skills' #ete shat en darnum a Skills
    def __str__(self):
        return self.name

class Skills(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True)
    skill_name = models.CharField(max_length=20,null=True)
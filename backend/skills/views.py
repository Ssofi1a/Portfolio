# views.py in your app
from django.http import JsonResponse
from .models import Skills

def skills_list(request):
    skills = Skills.objects.all().values()  # Get all skills
    skills_list = list(skills)  # Convert QuerySet to list
    return JsonResponse(skills_list, safe=False)  # Return JSON response

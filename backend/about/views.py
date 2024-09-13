from django.http import JsonResponse
from .models import About

# Create your views here.
def about(request):
    if request.method == 'GET':
        json = list(About.objects.values())
        return JsonResponse(json[0], safe=False)
    

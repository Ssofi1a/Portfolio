from django.http import JsonResponse
from .models import About

def about(request):
    about_instance = About.objects.first()
    if about_instance:
        about_data = {
            'img': about_instance.img.url,
            'desc': about_instance.desc,
            'cv': about_instance.cv.url,
        }
        return JsonResponse(about_data)
    return JsonResponse({'error': 'No data found'}, status=404)

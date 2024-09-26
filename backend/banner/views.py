from django.http import JsonResponse
from .models import Banner

# Create your views here.
def banner_data(request):
    banner = Banner.objects.first()  
    data = {
        'welcome_text': banner.welcome_text,
        'description': banner.description,
        'github_link': banner.github_link,
        'linkedin_link': banner.linkedin_link,
        'instagram_link': banner.instagram_link,
        'facebook_link': banner.facebook_link,
    }
    return JsonResponse(data)

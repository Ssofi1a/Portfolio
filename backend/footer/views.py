from django.http import JsonResponse
from .models import Footer

def footer(request):
    footer_instance = Footer.objects.first()
    if footer_instance:
        footer_data = {
            'phone': footer_instance.phone,
            'email': footer_instance.email,
            'link1': footer_instance.github_link,
            'link2': footer_instance.linkedin_link,
            'link3': footer_instance.instagram_link,
            'link4': footer_instance.facebook_link,
        }
        return JsonResponse(footer_data)
    return JsonResponse({'error': 'No data found'}, status=404)

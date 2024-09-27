from django.http import JsonResponse
from .models import Favs

def favs(request):
    fav_instance = Favs.objects.first()
    if fav_instance:
        about_data = {
            'fav_music': fav_instance.fav_music.url,
            'fav_quote': fav_instance.fav_quote,
            'fav_video': fav_instance.fav_video.url,
            'fav_book' : fav_instance.fav_book,
        }
        return JsonResponse(about_data)
    return JsonResponse({'error': 'No data found'}, status=404)
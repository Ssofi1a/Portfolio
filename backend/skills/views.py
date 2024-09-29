from django.http import JsonResponse
from .models import Category 

# def skills(request):
#     skill_instance = Skills.objects.first()
#     if skill_instance:
#         skills_data = {
#             'name1': skill_instance.name1,
#             'name2': skill_instance.name2,
#             'name3': skill_instance.name3,
#             'name4': skill_instance.name4,
#             'name5': skill_instance.name5,
#         }
#         return JsonResponse(skills_data)
#     return JsonResponse({'error': 'No data found'}, status=404)

def skills(req):
    return JsonResponse( list(Category.objects.all().values()),safe=False)
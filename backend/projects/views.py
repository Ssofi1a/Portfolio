from django.http import JsonResponse
from .models import Projects

# Create your views here.
def projects(request):
    project_objects = Projects.objects.first()
    if project_objects:
        project_data = {
            'project1' : project_objects.project1.url,
            'project2' : project_objects.project2.url,
            'project3' : project_objects.project3.url,
            'project4' : project_objects.project4.url,
            'project5' : project_objects.project5.url,
        }
        return JsonResponse(project_data)
    return JsonResponse({'Error' : 'No data found!'}, status=404)
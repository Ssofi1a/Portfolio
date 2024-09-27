from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
import json
from .models import ContactMessage

@csrf_exempt  # Temporarily disable CSRF for this view
def contact_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            name = data.get('name')
            surname = data.get('surname')
            message = data.get('message')

            # Save to the ContactMessage model
            contact_message = ContactMessage.objects.create(name=name, surname=surname, message=message)
            contact_message.save()  # Save the instance

            # Sending email
            send_mail(
                f'Message from {name} {surname}',
                message,
                'your_email@gmail.com',  # Replace with your email
                ['recipient_email@example.com'],  # Replace with the recipient email
                fail_silently=False,
            )

            return JsonResponse({'message': 'Contact information sent!'}, status=200)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid request'}, status=400)


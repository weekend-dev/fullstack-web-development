from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Hello
import logging
logger = logging.getLogger('development')


class Db(APIView):
    def get(self, request, format=None):
        logger.info('Hello World!')
        entry = Hello.objects.get(id=1)
        return Response({'message': entry.world})
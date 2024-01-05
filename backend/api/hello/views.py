from rest_framework.response import Response
from rest_framework.views import APIView
import logging
logger = logging.getLogger('development')


class Backend(APIView):
    def get(self, request, format=None):
        logger.info('Hello World!')
        return Response({'message': 'backend'})
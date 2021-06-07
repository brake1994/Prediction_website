from .serializers import CreatePredictionSerializer, PredictionSerializer
from .models import Prediction
from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response


# Create your views here.
class PredictionView(generics.CreateAPIView):
    queryset = Prediction.objects.all()
    serializer_class = PredictionSerializer

class CreatePredictionView(APIView):
    serializer_class = CreatePredictionSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        
        if serializer.is_valid():
            age = serializer.data.age
            
from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import CreatePredictionSerializer, PredictionSerializer, DataSerializer
from .models import Data, Prediction
from .ml_prediction.mlAlgorithm import predict, accuracy, getData



# Create your views here.
class PredictionView(generics.ListAPIView):
    queryset = Prediction.objects.all()
    serializer_class = PredictionSerializer

class CreatePredictionView(generics.CreateAPIView):
    serializer_class = CreatePredictionSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        
        if serializer.is_valid():
            age = serializer.data.get('age')
            sex = serializer.data.get('sex')
            chestPain = serializer.data.get('chestPain')
            restBp = serializer.data.get('restBp')
            chol = serializer.data.get('chol')
            fastBs = serializer.data.get('fastBs')
            restEcg = serializer.data.get('restEcg')
            maxHeartRate = serializer.data.get('maxHeartRate')
            exerciseAngina = serializer.data.get('exerciseAngina')
            exerciseStDep = serializer.data.get('exerciseStDep')

            prediction = Prediction(age= age, sex = sex, chestPain = chestPain, restBp = restBp,
                chol = chol, fastBs = fastBs, restEcg = restEcg, maxHeartRate = maxHeartRate,
                exerciseAngina = exerciseAngina, exerciseStDep = exerciseStDep)
        
            predictValues = [age, sex, chestPain, restBp, chol, fastBs, restEcg, maxHeartRate, exerciseAngina, exerciseStDep]

            serializer = CreatePredictionSerializer(prediction)
            predictResult = predict(predictValues)
            accuracyResult = accuracy()

            response = {'accuracy': accuracyResult, 'result': predictResult}

            return Response(response, status= status.HTTP_200_OK)

class HeatMapView(generics.RetrieveAPIView):
    queryset= Data.objects.all()
    serializer_class= DataSerializer

    def get(self, request, format=None):
        retrievedData = getData()

        response = {'data': retrievedData}
        return Response(response, status=status.HTTP_200_OK)
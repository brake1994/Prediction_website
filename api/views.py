from os import stat
from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import CreatePredictionSerializer, PredictionSerializer, DataSerializer
from .models import Data, Prediction
from .ml_prediction.mlAlgorithm import *



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
        retrievedData = getHeatmapData()

        response = {'data': retrievedData}
        return Response(response, status=status.HTTP_200_OK)

class ScatterPlotView(generics.RetrieveAPIView):
    queryset = Data.objects.all()
    serializer_class = DataSerializer

    def get(self, request, format=None):
        retrievedData = getScatterPlotData()

        response = {'age': retrievedData[0], 'restbp': retrievedData[1]}
        return Response(response, status=status.HTTP_200_OK)

class DatasetView(generics.RetrieveAPIView):
    queryset = Data.objects.all()
    serializer_class = DataSerializer

    def get(self, request, format=None):
        retrievedData = getDataset()

        response = {'age': retrievedData['age'], 'sex': retrievedData['sex'], 'cp': retrievedData['cp'],
            'trestbps': retrievedData['trestbps'], 'chol': retrievedData['chol'], 'fbs': retrievedData['fbs'],
            'restecg': retrievedData['restecg'], 'thalach': retrievedData['thalach'],
            'exang': retrievedData['exang'], 'oldpeak': retrievedData['oldpeak'], 'num': retrievedData['num']}
        
        return Response(response, status= status.HTTP_200_OK)

class AverageTableView(generics.RetrieveAPIView):
    queryset = Data.objects.all()
    serializer_class = DataSerializer

    def get(self, request, format=None):
        lowRisk = getLowRiskAverages()
        highRisk = getHighRiskAverages()

        response = {'lowRisk': lowRisk, 'highRisk': highRisk}
        return Response(response, status=status.HTTP_200_OK)
        
from rest_framework import serializers
from .models import Prediction, Data


class PredictionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prediction
        fields = ('age', 'sex', 'chestPain', 'restBp', 'chol', 'fastBs', 'restEcg', 
            'maxHeartRate', 'exerciseAngina', 'exerciseStDep')

class CreatePredictionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prediction
        fields = ('age', 'sex', 'chestPain', 'restBp', 'chol', 'fastBs', 'restEcg', 
            'maxHeartRate', 'exerciseAngina', 'exerciseStDep')

class DataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Data
        fields = ('age', 'sex', 'chestPain', 'restBp', 'chol', 'fastBs', 'restEcg', 
            'maxHeartRate', 'exerciseAngina', 'exerciseStDep', 'num')
        
from rest_framework import serializers
from .models import Prediction


class PredictionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prediction
        fields = ('id', 'age', 'sex', 'chestPain', 'restBp', 'chol', 'fastBs', 'restEcg', 'maxHeartRate', 'exerciseAngina', 'exerciseStDep')

class CreatePredictionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prediction
        fields = ('id', 'age', 'sex', 'chestPain', 'restBp', 'chol', 'fastBs', 'restEcg', 'maxHeartRate', 'exerciseAngina', 'exerciseStDep')
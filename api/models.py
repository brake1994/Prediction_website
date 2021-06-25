from django.db import models
from django.db.models.expressions import CombinedExpression

# Create your models here.
class Prediction(models.Model):
    age = models.IntegerField(null=False)
    sex = models.IntegerField(null=False)
    chestPain = models.IntegerField(null=False)
    restBp = models.IntegerField(null=False)
    chol = models.IntegerField(null=False)
    fastBs = models.IntegerField(null=False)
    restEcg = models.IntegerField(null=False)
    maxHeartRate = models.IntegerField(null=False)
    exerciseAngina =  models.IntegerField(null=False)
    exerciseStDep = models.IntegerField(null=False)

class Data(models.Model):
    age = models.IntegerField(null=False)
    sex = models.IntegerField(null=False)
    chestPain = models.IntegerField(null=False)
    restBp = models.IntegerField(null=False)
    chol = models.IntegerField(null=False)
    fastBs = models.IntegerField(null=False)
    restEcg = models.IntegerField(null=False)
    maxHeartRate = models.IntegerField(null=False)
    exerciseAngina =  models.IntegerField(null=False)
    exerciseStDep = models.IntegerField(null=False)
    num = models.IntegerField(null=False)
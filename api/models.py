from django.db import models

# Create your models here.
class Prediction(models.Model):
    age = models.IntegerField(null=False)
    sex = models.IntegerField(null=False)
    cp = models.IntegerField(null=False)
    trestbps = models.IntegerField(null=False)
    chol = models.IntegerField(null=False)
    fbs = models.IntegerField(null=False)
    restecg = models.IntegerField(null=False)
    thalach = models.IntegerField(null=False)
    exang =  models.IntegerField(null=False)
    oldpeak = models.IntegerField(null=False)

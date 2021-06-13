from django.db import models
import string, random

from django.db.models.expressions import CombinedExpression

def generate_unique_id():
    length = 7

    while True:
        id = ''.join(random.choices(string.ascii_uppercase, k=length))
        if Prediction.objects.filter(id= id).count() == 0:
            break

    return id

# Create your models here.
class Prediction(models.Model):
    id = models.CharField(unique=True, default= generate_unique_id, null=False, max_length=10, primary_key=True)
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

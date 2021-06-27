import numpy as np
import pandas as pd
import tensorflow as tf
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, confusion_matrix
from sklearn.model_selection import train_test_split
from tensorflow.keras import layers
from tensorflow.keras.layers.experimental import preprocessing

# Make numpy easier to read
np.set_printoptions(precision=3, suppress=True)

data = pd.read_csv('api/data/data.csv')

data = data.replace('?', None)

# Split data set
y = data['num']
x = data.drop('num', axis=1)
x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=.20, random_state=0)

logisticRegression = LogisticRegression(max_iter=1000)
model = logisticRegression.fit(x_train, y_train)

def predict(inputs):
    prediction = []
    for element in inputs:
        prediction.append(element)

    predictArray = [prediction]
    return logisticRegression.predict(predictArray)

def accuracy():
    prediction = logisticRegression.predict(x_test)
    return round(accuracy_score(y_test, prediction), 4)

def getHeatmapData():
    
    return data.corr()

def getScatterPlotData():

    sortedDataAge = data['age'].loc[data['num'] == 1]
    sortedDataTrestbps = data['trestbps'].loc[data['num'] == 1]

    return sortedDataAge, sortedDataTrestbps

def getHighRiskAverages():
    avgAge = round(data['age'].loc[data['num'] == 1].mean(), 2)
    avgTrestbps = round(data['trestbps'].loc[data['num'] == 1].mean(), 2)
    avgChol = round(data['chol'].loc[data['num'] == 1].mean(), 2)
    avgThalach = round(data['thalach'].loc[data['num'] == 1].mean(), 2)

    return avgAge, avgTrestbps, avgChol, avgThalach

def getLowRiskAverages():
    avgAge = round(data['age'].loc[data['num'] == 0].mean(), 2)
    avgTrestbps = round(data['trestbps'].loc[data['num'] == 0].mean(), 2)
    avgChol = round(data['chol'].loc[data['num'] == 0].mean(), 2)
    avgThalach = round(data['thalach'].loc[data['num'] == 0].mean(), 2)

    return avgAge, avgTrestbps, avgChol, avgThalach

def getDataset():
    return data
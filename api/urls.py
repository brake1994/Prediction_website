from django.urls import path
from .views import PredictionView, CreatePredictionView, HeatMapView, ScatterPlotView, DatasetView, AverageTableView

urlpatterns = [
    path('prediction', PredictionView.as_view()),
    path('create-prediction', CreatePredictionView.as_view()),
    path('heatmap', HeatMapView.as_view()),
    path('scatterplot', ScatterPlotView.as_view()),
    path('dataset', DatasetView.as_view()),
    path('averagetable', AverageTableView.as_view()),

]
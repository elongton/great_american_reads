from django.urls import path
from .views import MapView, ReadingDetailView

urlpatterns = [
    path('', MapView.as_view(), name='home'),
    path('<int:pk>', ReadingDetailView.as_view(), name='reading-detail'),
]

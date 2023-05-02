from django.contrib import admin
from django.urls import path,include
from .views import *


urlpatterns = [
    path('users/',UsersViewSet.as_view()),
    path('events/',EventsViewSet.as_view()),
    path('enrolledevents/',EnrolledEventsViewSet.as_view()),
    path('likedevents/',LikedEventsViewSet.as_view()),
    path('comments/',CommentsViewSet.as_view()),
    path('createdevents/',CreatedEventsViewSet.as_view()),

]
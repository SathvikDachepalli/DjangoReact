from rest_framework import serializers
from .models import *;

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model=Users
        fields='__all__'
        # override the default behaviour of the is_valid() method

        
    
class EventsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Events
        fields='__all__'

class EnrolledEventsSerializer(serializers.ModelSerializer):
    class Meta:
        model=EnrolledEvents
        fields='__all__'

class LikedEventsSerializer(serializers.ModelSerializer):
    class Meta:
        model=LikedEvents
        fields='__all__'

class CommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Comments
        fields='__all__'

class CreatedEventsSerializer(serializers.ModelSerializer):
    class Meta:
        model=CreatedEvents
        fields='__all__'


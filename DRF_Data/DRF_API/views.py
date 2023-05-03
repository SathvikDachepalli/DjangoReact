from django.shortcuts import render
from .models import *;
from .seralizers import *;
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

class UsersViewSet(APIView):
    def get(self,request,*args,**kwargs):
        result=Users.objects.all()
        serializer=UsersSerializer(result,many=True)
        return Response(serializer.data,status=200)
    
    def post(self,request,*args,**kwargs):
        serializer=UsersSerializer(data=request.data)
        resultEmail=None
        resultPwd=None

        for x in Users.objects.all():
            if x.Email==request.data['Email']:
                resultEmail=x.Email
                if x.Password==request.data['Password']:
                    resultPwd=x.Password
                break
                
        if request.data['FullName']:

            if resultEmail:
                return Response({'Code':0,"Message":"User Already Exists"},status=201)

            else: 
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data,status=201)
                else:
                    return Response(serializer.errors,status=400)
        else:
            if resultPwd and resultEmail:
                return Response({'Code':1,"Message":"Login Successful"},status=200)
            else:
                return Response({'Code':0,"Message":"Incorrect Email or Password"},status=201)
                
    
    
class EventsViewSet(APIView):
    def get(self, request, *args, **kwargs):
        result=Events.objects.all()
        serializer=EventsSerializer(result,many=True)
        return Response(serializer.data,status=200)

    def post(self, request, *args, **kwargs):
        serializer=EventsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        else:
            return Response(serializer.errors,status=400)
    
    def delete(self, request, *args, **kwargs):
        result=Events.objects.get(Event_id=request.data['Event_id'])
        result.delete()
        return Response("Event deleted",status=200)

class EnrolledEventsViewSet(APIView):
    def get(self, request, *args, **kwargs):
        result=EnrolledEvents.objects.all()
        serializer=EnrolledEventsSerializer(result,many=True)
        return Response(serializer.data,status=200)

    def post(self, request, *args, **kwargs):
        serializer=EnrolledEventsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        else:
            return Response(serializer.errors,status=400)
    
    def delete(self, request, *args, **kwargs):
        result=EnrolledEvents.objects.get(Event_id=request.data['Event_id'])
        result.delete()
        return Response("Enrolled Event deleted",status=200)

class LikedEventsViewSet(APIView):
    # Increase amount of likes
    def post(self, request, *args, **kwargs):
        result=LikedEvents.objects.get(Event_id=request.data['Event_id'])
        result.Likes+=1
        result.save()
        return Response("Like added",status=200)
    
    # Decrease amount of likes
    def delete(self, request, *args, **kwargs):
        result=LikedEvents.objects.get(Event_id=request.data['Event_id'])
        result.Likes-=1
        result.save()
        return Response("Like removed",status=200)
    
    def get(self, request, *args, **kwargs):
        result=LikedEvents.objects.all()
        serializer=LikedEventsSerializer(result,many=True)
        return Response(serializer.data,status=200)

class CommentsViewSet(APIView):
    # Add comments to event
    def post(self, request, *args, **kwargs):
        serializer=CommentsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        else:
            return Response(serializer.errors,status=400)
    
    # Delete comments from event
    def delete(self, request, *args, **kwargs):
        result=Comments.objects.get(Event_id=request.data['Event_id'])
        result.delete()
        return Response("Comment deleted",status=200)
    
    def get(self, request, *args, **kwargs):
        result=Comments.objects.all()
        serializer=CommentsSerializer(result,many=True)
        return Response(serializer.data,status=200)
    
class CreatedEventsViewSet(APIView):
    def get(self, request, *args, **kwargs):
        result=CreatedEvents.objects.all()
        serializer=CreatedEventsSerializer(result,many=True)
        return Response(serializer.data,status=200)
    
    def post(self, request, *args, **kwargs):
        serializer=CreatedEventsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        else:
            return Response(serializer.errors,status=400)
        
    def delete(self, request, *args, **kwargs):
        result=CreatedEvents.objects.get(Event_id=request.data['Event_id'])
        result.delete()
        return Response("Created Event deleted",status=200)


from django.db import models

class Users(models.Model):
    User_id=models.AutoField(primary_key=True)
    FullName = models.CharField(max_length=100)
    Email = models.CharField(max_length=100)
    Password = models.CharField(max_length=100)
    Phone = models.CharField(max_length=100)

    def __str__(self):
        return self.Email

class Events(models.Model):
    Event_id=models.AutoField(primary_key=True)
    Event_name = models.CharField(max_length=100)
    Event_description = models.CharField(max_length=100)
    Event_date = models.DateField()
    Event_time = models.TimeField()
    Event_location = models.CharField(max_length=100)
    Event_organizer = models.ForeignKey(Users, on_delete=models.CASCADE)
    Event_Likes=models.IntegerField(default=0)
    Event_Image=models.ImageField(upload_to='images/',default='images/None/No-img.jpg')

class EnrolledEvents(models.Model):
    Event_id = models.ForeignKey(Events, on_delete=models.CASCADE)
    User_id = models.ForeignKey(Users, on_delete=models.CASCADE)

class LikedEvents(models.Model):
    Event_id = models.ForeignKey(Events, on_delete=models.CASCADE)
    User_id = models.ForeignKey(Users, on_delete=models.CASCADE)

class Comments(models.Model):
    Comment_id=models.AutoField(primary_key=True)
    Event_id = models.ForeignKey(Events, on_delete=models.CASCADE)
    User_id = models.ForeignKey(Users, on_delete=models.CASCADE)
    Comment_text = models.CharField(max_length=100)
    Comment_date = models.DateField()
    Comment_time = models.TimeField()

class CreatedEvents(models.Model):
    Event_id = models.ForeignKey(Events, on_delete=models.CASCADE)
    User_id = models.ForeignKey(Users, on_delete=models.CASCADE)
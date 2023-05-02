from django.contrib import admin

# Register your models here.
from .models import *

admin.site.register(Users)
admin.site.register(Events)
admin.site.register(EnrolledEvents)
admin.site.register(LikedEvents)
admin.site.register(Comments)
admin.site.register(CreatedEvents)


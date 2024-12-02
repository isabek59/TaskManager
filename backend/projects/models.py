from django.db import models
from django.contrib.auth.models import User
from datetime import datetime, date

# Create your models here.
class Projects(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    members = models.ManyToManyField(User, related_name="project_members")
    

    def __str__(self):        
        return self.title


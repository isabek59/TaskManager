from django.db import models
# from user.models import User
from django.contrib.auth.models import User

from datetime import datetime, date
from projects.models import Projects

# Create your models here.
class Todos(models.Model):
    text = models.TextField()
    project = models.ForeignKey(Projects, on_delete=models.CASCADE, default=None)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    create_date = models.DateTimeField(default=datetime.now)
    due_date = models.DateField(default=date.today)
    is_done = models.BooleanField()

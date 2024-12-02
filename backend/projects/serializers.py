from rest_framework import serializers
from .models import Projects
from django.contrib.auth.models import User

from todos.serializers import TodosSerializer



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']
        

class ProjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = ['id', 'title']


class ProjectSerializer(serializers.ModelSerializer):
    members = UserSerializer(many=True, read_only=True)
    todos_set = TodosSerializer(many=True, read_only=True)
    class Meta:
        model = Projects
        fields = ['id', 'title', 'description', 'members', 'todos_set']



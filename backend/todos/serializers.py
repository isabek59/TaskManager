from rest_framework import serializers
from todos.models import Todos
# from user.serializers import UserSerizlier

class TodosSerializer(serializers.ModelSerializer):
  class Meta:
    model = Todos
    fields = '__all__'


class TodoCreateSerializer(serializers.ModelSerializer):
  class Meta:
    model = Todos
    fields = ['id', 'text', 'is_done', 'due_date']
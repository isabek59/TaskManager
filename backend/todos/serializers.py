from rest_framework import serializers
from todos.models import Todos
# from user.serializers import UserSerizlier

class TodosSerializer(serializers.ModelSerializer):
  class Meta:
    model = Todos
    fields = '__all__'
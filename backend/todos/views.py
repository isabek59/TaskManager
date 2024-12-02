from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodosSerializer
from .models import Todos
from datetime import date
from rest_framework.exceptions import PermissionDenied
# Create your views here.

class TodosViewSet(viewsets.ModelViewSet):    
    queryset = Todos.objects.all()
    serializer_class = TodosSerializer
    def get_queryset(self):        
        queryset = super().get_queryset()
        request = self.request        
        
        is_done = request.query_params.get('is_done')        
        if is_done is not None:
            queryset = queryset.filter(is_done=is_done.lower() == 'true')

        today = request.query_params.get('today')
        if today is not None and today.lower() == 'true':            
            queryset = queryset.filter(due_date=date.today())
        
        return queryset


    def perform_create(self, serializer):
        return serializer.save(author=self.request.user)

    def perform_update(self, serializer):        
        todo = self.get_object()
        if todo.author != self.request.user:            
            raise PermissionDenied("У вас нет прав редактировать эту заметку.")
        return serializer.save()
from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import TodosSerializer, TodoCreateSerializer
from .models import Todos
from datetime import date
from rest_framework.exceptions import PermissionDenied
from rest_framework.decorators import action
from rest_framework.response import Response
# Create your views here.

class TodosViewSet(viewsets.ModelViewSet):    
    queryset = Todos.objects.all()
    serializer_class = TodosSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_serializer_class(self):
        if self.action == 'create' or self.action == 'update':
            return TodoCreateSerializer
        return super().get_serializer_class()


    def get_queryset(self):         
        queryset = super().get_queryset()
        request = self.request        
        
        is_done = request.query_params.get('is_done')        
        if is_done is not None:
            queryset = queryset.filter(is_done=is_done.lower() == 'true')

        today = request.query_params.get('today')
        if today is not None and today.lower() == 'true':            
            queryset = queryset.filter(due_date=date.today())
        queryset = queryset.filter(author=self.request.user.id)
        
        return queryset


    @action(detail=True, methods=['patch'])
    def mark_as_done(self, request, pk=None):
        todo = self.get_object()
        todo.is_done = not todo.is_done
        todo.save()       
        serializer = self.get_serializer(todo) 
        return Response(serializer.data, status=201)


    def perform_create(self, serializer):
        return serializer.save(author=self.request.user)



# class TodoMarkAsCompleted(generics.RetrieveUpdateDestroyAPIView):
#     serializer_class = TodosSerializer

#     def get_object(self):
#         user_id = self.kwargs['user_id']
#         todo_id = self.kwargs['todo_id']

#         user = User.objects.get(id=user_id)
#         todo = Todo.objects.get(id=todo_id, user=user)

#         todo.is_done = not todo.is_done
#         todo.save()

#         return todo


    # def perform_update(self, serializer):        
    #     todo = self.get_object()
    #     if todo.author != self.request.user:            
    #         raise PermissionDenied("У вас нет прав редактировать эту заметку.")
    #     return serializer.save()


# class MarkTodoAsDone(viewsets.GenericViewSet, mixins.UpdateModelMixin):
#     serializer_class = TodoSerializer
    
#     def get_object(self):


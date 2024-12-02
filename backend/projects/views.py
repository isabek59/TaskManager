from django.shortcuts import render
from .serializers import ProjectsSerializer, ProjectSerializer
from .models import Projects
from rest_framework import viewsets

# Create your views here.


class ProjectViewSet(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Projects.objects.all()

    def get_serializer_class(self):
        if self.action == 'list':
            return ProjectsSerializer
        return super().get_serializer_class()

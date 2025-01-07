# Generated by Django 5.1.3 on 2024-12-13 19:54

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0002_delete_task'),
        ('todos', '0005_alter_todos_is_done'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todos',
            name='project',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='projects.projects'),
        ),
    ]

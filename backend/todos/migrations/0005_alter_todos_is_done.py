# Generated by Django 5.1.3 on 2024-12-13 19:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todos', '0004_todos_project'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todos',
            name='is_done',
            field=models.BooleanField(default=False),
        ),
    ]

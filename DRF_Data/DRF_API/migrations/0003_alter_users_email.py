# Generated by Django 4.1 on 2023-05-02 08:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DRF_API', '0002_createdevents'),
    ]

    operations = [
        migrations.AlterField(
            model_name='users',
            name='Email',
            field=models.EmailField(max_length=100),
        ),
    ]

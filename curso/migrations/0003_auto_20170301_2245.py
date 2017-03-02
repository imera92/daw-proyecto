# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-02 03:45
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('curso', '0002_auto_20170228_1903'),
    ]

    operations = [
        migrations.AddField(
            model_name='seccion',
            name='indice',
            field=models.PositiveSmallIntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='seccion',
            name='estado',
            field=models.CharField(choices=[('Activo', 'active'), ('Inactivo', 'inactive')], max_length=8),
        ),
    ]

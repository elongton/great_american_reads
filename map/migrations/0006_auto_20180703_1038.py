# Generated by Django 2.0.6 on 2018-07-03 14:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('map', '0005_auto_20180703_1026'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reading',
            name='synopsis_url',
            field=models.URLField(default='', null=True),
        ),
    ]

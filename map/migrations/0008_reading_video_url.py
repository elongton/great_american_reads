# Generated by Django 2.0.6 on 2018-07-06 17:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('map', '0007_auto_20180703_1041'),
    ]

    operations = [
        migrations.AddField(
            model_name='reading',
            name='video_url',
            field=models.URLField(blank=True, default='', null=True),
        ),
    ]

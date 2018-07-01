# Generated by Django 2.0.6 on 2018-07-01 16:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('map', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reading',
            name='book_title',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='reading',
            name='location_name_or_address',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='reading',
            name='marker_label',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='reading',
            name='reader_name',
            field=models.CharField(max_length=200),
        ),
    ]

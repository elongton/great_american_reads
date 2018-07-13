from django.db import models
# Create your models here.

class Reading(models.Model):

    date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    book_title = models.CharField(max_length=200)
    author = models.CharField(max_length=200, default='No Author Added')
    reader_name = models.CharField(max_length=200)
    location_name_or_address = models.CharField(max_length=200)
    reason = models.TextField(default='')
    fun_fact = models.TextField(default='')
    image_url = models.URLField()
    synopsis_url = models.URLField(default='', null=True, blank=True)
    video_url = models.URLField(default='', null=True, blank=True)
    latitude = models.FloatField()
    longitude = models.FloatField()
    marker_label = models.CharField(max_length=200)
    activated = models.BooleanField(default=True)
    email_address = models.TextField(default='', null=True, blank=True)
    phone_number = models.TextField(default='', null=True, blank=True)


    def __str__(self):
        return str(self.book_title)

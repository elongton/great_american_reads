from django.contrib import admin
from .models import Reading
# Register your models here.




class ReadingAdmin(admin.ModelAdmin):
    list_display = ('book_title', 'reader_name', 'date', 'start_time', 'end_time', 'activated', 'phone_number', 'email_address')






admin.site.register(Reading, ReadingAdmin)

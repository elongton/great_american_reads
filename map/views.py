from django import forms
from django.http import HttpResponseForbidden, HttpResponseRedirect
from django.urls import reverse
from django.views.generic.edit import FormMixin
from django.shortcuts import render
from django.views.generic import (View, TemplateView,
                                  CreateView, DetailView,
                                  ListView)
from .models import Reading


class MapView(TemplateView):
    template_name = "index.html"
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['readings'] = Reading.objects.exclude(activated__exact=False).order_by('date')
        return context




class ReadingDetailView(DetailView):
    model = Reading

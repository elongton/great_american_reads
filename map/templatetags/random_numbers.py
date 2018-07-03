import random
from django import template

register = template.Library()

@register.filter(name="random_int")
def random_int(value):
    randadd = random.random()*1/1e4
    value = value + randadd
    return value

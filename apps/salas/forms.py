from django import forms
from django_select2.forms import Select2Widget
from .models import *


class CrearSalaForm(forms.ModelForm):
    class Meta:
        model = Sala
        fields = ('tipo_sala', 'num_sala', 'sucursal', 'is_active')
        labels = {
            'is_active': 'Activo',
        }

        widgets = {
            'tipo_sala': Select2Widget()
        }

    def __init__(self, *args, **kwargs):
        super(CrearSalaForm, self).__init__(*args, **kwargs)

        for fieldname in ['num_sala', 'tipo_sala']:
            self.fields[fieldname].widget.attrs['placeholder'] = ''

# -*- coding: utf-8 -*-
from openerp import models, fields


class NhClinicalPatientInDetail(models.Model):

    _name = 'nh.clinical.patient.in_detail'

    patient_at_a_glance = fields.Many2one(
        comodel_name='nh.clinical.patient.at_a_glance')

    more_detail_one = fields.Char()
    more_detail_two = fields.Char()
    more_detail_three = fields.Char()

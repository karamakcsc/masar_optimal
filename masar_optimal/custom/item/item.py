
from __future__ import unicode_literals
import frappe, erpnext
import json
from frappe.utils import flt, cstr, nowdate, comma_and
from frappe import throw, msgprint, _
from frappe.custom.doctype.custom_field.custom_field import create_custom_field
from six import iteritems, string_types


@frappe.whitelist()
def get_avg_valuation_rate(item_code):

    vrate = frappe.db.sql("""
                            Select SUM(stock_value) / SUM(actual_qty) as avg_valuation_rate
                            From tabBin tb
                            Where item_code  = '%s'
                            LIMIT 1""" %(item_code), as_dict=True)
    if vrate:
        return vrate[0].avg_valuation_rate
    else:
        return

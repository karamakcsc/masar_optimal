
from __future__ import unicode_literals
import frappe, erpnext
import json
from frappe.utils import flt, cstr, nowdate, comma_and
from frappe import throw, msgprint, _
from frappe.custom.doctype.custom_field.custom_field import create_custom_field
from six import iteritems, string_types


@frappe.whitelist()
def get_last_price(item_code):
    last_price = frappe.db.sql("""
                            Select tpii.rate as rate
                            from `tabSales Invoice Item` tpii
                            Inner Join `tabSales Invoice` tpi On tpii.parent = tpi.name
                            where tpii.item_code = '%s' and tpi.docstatus = 1
                            order By tpii.creation DESC
                            LIMIT 1""" %(item_code), as_dict=True
                            )

    if last_price:
        return last_price[0].rate
    else:
        return



@frappe.whitelist()
def get_default_location(item_code):
    dloc = frappe.db.sql("""
                            Select item_location
                            From `tabItem Location` til
                            Where  is_default = 1 and parent = '%s'
                            LIMIT 1""" %(item_code), as_dict=True)
    if dloc:
        return dloc[0].item_location
    else:
        return

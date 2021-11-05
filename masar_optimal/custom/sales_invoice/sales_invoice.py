#
# from __future__ import unicode_literals
# import frappe, erpnext
# import json
# from frappe.utils import flt, cstr, nowdate, comma_and
# from frappe import throw, msgprint, _
# from frappe.custom.doctype.custom_field.custom_field import create_custom_field
# from six import iteritems, string_types
#
#
# @frappe.whitelist()
# def get_last_price(item_code):
#     last_price = frappe.db.sql("""
#                             Select tpii.rate as rate
#                             from `tabSales Invoice Item` tpii
#                             Inner Join `tabSales Invoice` tpi On tpii.parent = tpi.name
#                             where tpii.item_code = '%s' and tpi.docstatus = 1
#                             order By tpii.creation DESC
#                             LIMIT 1""" %(item_code), as_dict=True
#                             )
#
#     return last_price[0].rate

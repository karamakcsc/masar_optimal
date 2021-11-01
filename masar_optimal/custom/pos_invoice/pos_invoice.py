
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
                            from `tabPOS Invoice Item` tpii
                            Inner Join `tabPOS Invoice` tpi On tpii.parent = tpi.name
                            where tpii.item_code = '%s' and tpi.docstatus = 1
                            order By tpii.creation DESC
                            LIMIT 1""" %(item_code), as_dict=True
                            )
    #frappe.msgprint(str(last_price[0].rate))
    return last_price[0].rate

# @frappe.whitelist()
# def custom_get_item_details(args):
#     #that run standard event.
#     from erpnext.stock.get_item_details import get_item_details
#     out = get_item_details(args)
#
#
#     #Allow you to get data from args.
#     args = process_args(args)
#
#     #Your change event. You can append data to out.
#
#     item_doc = frappe.get_doc("Item", out.item_code)
#     out.margin_rate_or_amount = flt(item_doc.retail_price)
#
#
#
#
#
#     return out
#
# def process_args(args):
#     if isinstance(args, str):
#         args = json.loads(args)
#
#     args = frappe._dict(args)
#
#     return args

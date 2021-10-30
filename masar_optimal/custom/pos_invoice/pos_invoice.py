
from __future__ import unicode_literals
import frappe, erpnext
import json
from frappe.utils import flt, cstr, nowdate, comma_and
from frappe import throw, msgprint, _
from frappe.custom.doctype.custom_field.custom_field import create_custom_field
from six import iteritems, string_types

@frappe.whitelist()
def custom_get_item_details(args):
    #that run standard event.
    from erpnext.stock.get_item_details import get_item_details
    out = get_item_details(args)


    #Allow you to get data from args.
    args = process_args(args)

    #Your change event. You can append data to out.

    item_doc = frappe.get_doc("Item", out.item_code)
    out.price_list_rate = flt(item_doc.retail_price)





    return out

def process_args(args):
    if isinstance(args, str):
        args = json.loads(args)

    args = frappe._dict(args)

    return args

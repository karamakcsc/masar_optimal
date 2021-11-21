# Copyright (c) 2013, KCSC and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
from frappe import _
import frappe

def execute(filters=None):
	return get_columns(), get_data(filters)

def get_data(filters):
	print(f"\n\n\n\{filters}\n\n\n\n")
	# _creation = filters.get('creation'), filters.get('creation') #date range
	# condition
	# conditions = " AND 1=1 "
	# if(filters.get('warehouse')):conditions += f" AND warehouse='{filters.get('warehouse')}' "
	# if(filters.get('item_code')):conditions += f" AND item_code='{filters.get('item_code')}' "
	# print(f"\n\n\n\{conditions}\n\n\n\n")

	data = frappe.db.sql("""SELECT name, invoice_type, customer_name, grand_total, total, total_taxes_and_charges, posting_date, owner FROM `tabSales Invoice`;""")
	return data

def get_columns():
	return [
	   "Name: Link/Name:200",
	   "Invoice Type:Data:150",
	   "Customer Name:Data:150",
	   "Grand Total:Data:150",
	   "Total:Data:150",
	   "Total Tax:Data:150",
	   "Posting Date:150",
	   "User:150",
	   "Status:150"
	]

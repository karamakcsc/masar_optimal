# Copyright (c) 2013, KCSC and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
from frappe import _
import frappe

def execute(filters=None):
	return get_columns(), get_data(filters)

def get_data(filters):
	_from, to = filters.get('from'), filters.get('to') #date range
    #Conditions
	conditions = " AND 1=1 "
	if(filters.get('name')):conditions += f" AND name LIKE '%{filters.get('name')}' "
	if(filters.get('invoice_type')):conditions += f" AND name LIKE '%{filters.get('invoice_type')}' "
	if(filters.get('customer_name')):conditions += f" AND customer_name LIKE '%{filters.get('customer_name')}' "
	if(filters.get('sales_person')):conditions += f" AND sales_person='{filters.get('sales_person')}' "
	if(filters.get('owner')):conditions += f" AND owner='{filters.get('owner')}' "
	if(filters.get('is_return')):conditions += f" AND is_return='{filters.get('is_return')}' "
	if(filters.get('docstatus')):conditions += f" AND is_return='{filters.get('docstatus')}' "
	#print(f"\n\n\n\{filters}\n\n\n\n")
	# _creation = filters.get('creation'), filters.get('creation') #date range
	# condition
	# conditions = " AND 1=1 "
	# if(filters.get('warehouse')):conditions += f" AND warehouse='{filters.get('warehouse')}' "
	# if(filters.get('item_code')):conditions += f" AND item_code='{filters.get('item_code')}' "
	# print(f"\n\n\n\{conditions}\n\n\n\n")

	#SQL Query
	data = frappe.db.sql(f"""SELECT name, invoice_type, customer_name, total, total_taxes_and_charges, grand_total, posting_date, posting_time, is_return, owner FROM `tabSales Invoice` WHERE (posting_date BETWEEN '{_from}' AND '{to}') {conditions};""")
	return data

def get_columns():
	return [
	   "Name: Link/Name:200",
	   "Invoice Type: Data:100",
	   "Customer Name: Data:200",
	   "Total: Data:120",
	   "Total Tax: Data:120",
	   "Grand Total: Data:120",
	   "Posting Date: Date/Posting Date:120",
	   "Posting Time: Time/Posting Time:100",
	   "Is Return: Check/Is Return:130",
	   "User:150"
	]

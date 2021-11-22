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
	if(filters.get('invoice_type')):conditions += f" AND invoice_type='{filters.get('invoice_type')}' "
	if(filters.get('customer_name')):conditions += f" AND customer_name LIKE '%{filters.get('customer_name')}' "
	if(filters.get('sales_person')):conditions += f" AND sales_person='{filters.get('sales_person')}' "
	if(filters.get('owner')):conditions += f" AND owner='{filters.get('owner')}' "
	if(filters.get('is_return')):conditions += f" AND is_return='{filters.get('is_return')}' "
	if(filters.get('status')):conditions += f" AND status LIKE '%{filters.get('status')}' "

	#SQL Query
	data = frappe.db.sql(f"""Select tsi.name, tsi.invoice_type, tsi.customer_name, tsi.total, tsi.total_taxes_and_charges, tsi.grand_total,
									tsi.posting_date, tsi.posting_time, tsi.is_return,
									IF(ISNULL(tst.sales_person) =0 ,tst.sales_person ,''),tsi.status,
								    tsi.owner
							FROM `tabSales Invoice` tsi
							LEFT Join `tabSales Team` tst ON tsi.name =tst.parent and tst.parenttype = 'Sales Invoice'
							WHERE (posting_date BETWEEN '{_from}' AND '{to}')
							 {conditions};""")
	return data

def get_columns():
	return [
	   "Name: Link/name:200",
	   "Invoice Type: Data:100",
	   "Customer Name: Data:200",
	   "Total: Data:120",
	   "Total Tax: Data:120",
	   "Grand Total: Data:120",
	   "Posting Date: Date/Posting Date:120",
	   "Posting Time: Time/Posting Time:100",
	   "Is Return: Check/Is Return:130",
	   "Sales Person:150",
	   "Status:150",
	   "User:150"
	]

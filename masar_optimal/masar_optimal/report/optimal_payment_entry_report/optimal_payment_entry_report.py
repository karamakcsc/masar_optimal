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
	if(filters.get('pay_no')):conditions += f" AND name LIKE '%{filters.get('pay_no')}' "
	if(filters.get('payment_type')):conditions += f" AND payment_type='{filters.get('payment_type')}' "
	if(filters.get('party_type')):conditions += f" AND party_type='{filters.get('party_type')}' "
	if(filters.get('party')):conditions += f" AND party LIKE '%{filters.get('party')}' "
	if(filters.get('mode_of_payment')):conditions += f" AND mode_of_payment='{filters.get('mode_of_payment')}' "
	if(filters.get('owner')):conditions += f" AND owner='{filters.get('owner')}' "
	#if(filters.get('is_return')):conditions += f" AND is_return='{filters.get('is_return')}' "
	if(filters.get('status')):conditions += f" AND status='{filters.get('status')}' "

	#SQL Query
	data = frappe.db.sql(f"""SELECT name, payment_type, party_type, party, mode_of_payment, posting_date, paid_amount,
	                         paid_from_account_balance, paid_to_account_currency, total_cheques_amount, status, owner
                                 FROM `tabPayment Entry`
							WHERE (posting_date BETWEEN '{_from}' AND '{to}')
							 {conditions};""")
	return data

def get_columns():
	return [
	   "Name: Link/Payment Entry:200",
	   "Payment Type: Data:120",
	   "Party Type: Data:150",
	   "Party Name: Data:190",
	   "Mode of Payment: Data:100",
	   "Posting Date: Date:120",
	   "Paid Amount: Currency:120",
	   "Account Balance: Currency:150",
	   "Account Currency: Currency:150",
	   "Total Cheques Amount: Currency:150",
	   "Status:150",
	   "User:150"
	]

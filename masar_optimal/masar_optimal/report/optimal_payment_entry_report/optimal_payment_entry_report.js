// Copyright (c) 2016, KCSC and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Optimal Payment Entry Report"] = {
	"filters": [
							{
								"fieldname": "pay_no",
								"label": __("ID"),
								"fieldtype": "Link",
								"options": "Payment Entry",
								"width": 100,
								"reqd": 0,
							},
							{
								"fieldname": "from",
								"label": __("From Date"),
								"fieldtype": "Date",
								"width": 80,
								"reqd": 1,
								"default": dateutil.year_start()
							 },
							 {
								"fieldname": "to",
								"label": __("To Date"),
								"fieldtype": "Date",
								"width": 80,
								"reqd": 1,
								"default": dateutil.year_end()
							},
						  {
								"fieldname": "payment_type",
								"label": __("Payment Type"),
								"fieldtype": "Select",
								"options": ["\n","Receive","Pay","Internal Transfer"],
								"width": 100,
								"reqd": 0,
							},
							{
								"fieldname": "party_type",
								"label": __("Party Type"),
								"fieldtype": "Link",
								"options": "Party Type",
								"width": 100,
								"reqd": 0,
							},
							{
								"fieldname": "party",
								"label": __("Party Name"),
								"fieldtype": "Data",
								// "options": "Sales Person",
								"width": 100,
								"reqd": 0,
							},
							{
								"fieldname": "owner",
								"label": __("User Name"),
								"fieldtype": "Link",
								"options": "Employee",
								"width": 100,
								"reqd": 0,
							},
							{
								"fieldname": "status",
								"label": __("Status"),
								"fieldtype": "Select",
								"options": ["\n","Draft","Paid","Unpaid","Return","Overdue","Credit Note Issued","Submitted","Partly Paid", "Unpaid and Discounted","Partly Paid and Discounted","Overdue and Discounted","Cancelled","Internal Transfer"],
								"width": 100,
								"reqd": 0,
							},
							{
								"fieldname": "mode_of_payment",
								"label": __("Mode of Payment"),
								"fieldtype": "Select",
								"options": ["\n","Cash","Cheque","Transfer"],
								"width": 100,
								"reqd": 0,
							}

	]
};

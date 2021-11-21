// Copyright (c) 2016, KCSC and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Sales Invoice Report"] = {
	"filters": [
							{
							"fieldname": "name",
							"label": __("ID"),
							"fieldtype": "Data",
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
							"fieldname": "invoice_type",
							"label": __("Invoice Type"),
							"fieldtype": "Select",
							"options": ["Cash","Credit"],
							"width": 100,
							"reqd": 0,
						},
						{
							"fieldname": "customer_name",
							"label": __("Customer Name"),
							"fieldtype": "Data",
							"width": 100,
							"reqd": 0,
						},
						{
							"fieldname": "grand_total",
							"label": __("Grand Total"),
							"fieldtype": "Data",
							"width": 100,
							"reqd": 0,
						},
						{
							"fieldname": "total",
							"label": __("Total"),
							"fieldtype": "Data",
							"width": 100,
							"reqd": 0,
						},
						{
							"fieldname": "base_total_taxes_and_charges",
							"label": __("Total Tax"),
							"fieldtype": "Data",
							"width": 100,
							"reqd": 0,
						},
						{
							"fieldname": "posting_time",
							"label": __("Posting Time"),
							"fieldtype": "Time",
							"width": 100,
							"reqd": 0,
						},
						// {
						// 	"fieldname": "sales_person",
						// 	"label": __("Sales Persone"),
						// 	"fieldtype": "Link",
						// 	"options": "Sales Person",
						// 	"width": 100,
						// 	"reqd": 0,
						// },
						{
							"fieldname": "owner",
							"label": __("User Name"),
							"fieldtype": "Link",
							"options": "Employee",
							"width": 100,
							"reqd": 0,
						},
						{
							"fieldname": "is_return",
							"label": __("Is Return"),
							"fieldtype": "Check",
							//"options": "Is Return",
							"width": 100,
							"reqd": 0,
						}
	]
};

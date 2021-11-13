from . import __version__ as app_version

app_name = "masar_optimal"
app_title = "Masar Optimal"
app_publisher = "KCSC"
app_description = "Optimal"
app_icon = "octicon octicon-file-directory"
app_color = "grey"
app_email = "info@kcsc.com.jo"
app_license = "MIT"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/masar_optimal/css/masar_optimal.css"
# app_include_js = "/assets/masar_optimal/js/masar_optimal.js"

# include js, css files in header of web template
# web_include_css = "/assets/masar_optimal/css/masar_optimal.css"
# web_include_js = "/assets/masar_optimal/js/masar_optimal.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "masar_optimal/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "masar_optimal.install.before_install"
# after_install = "masar_optimal.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "masar_optimal.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
# 	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

doctype_js = {
    "Item" : "custom/item/item.js",
    "POS Invoice" : "custom/pos_invoice/pos_invoice.js",
    "Sales Invoice" : "custom/sales_invoice/sales_invoice.js"
 }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"masar_optimal.tasks.all"
# 	],
# 	"daily": [
# 		"masar_optimal.tasks.daily"
# 	],
# 	"hourly": [
# 		"masar_optimal.tasks.hourly"
# 	],
# 	"weekly": [
# 		"masar_optimal.tasks.weekly"
# 	]
# 	"monthly": [
# 		"masar_optimal.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "masar_optimal.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "masar_optimal.event.get_events"
# }
#override_whitelisted_methods = { "erpnext.stock.get_item_details.get_item_details" : "masar_optimal.custom.pos_invoice.pos_invoice.custom_get_item_details" }
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
# 	"Task": "masar_optimal.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]


# User Data Protection
# --------------------

user_data_fields = [
	{
		"doctype": "{doctype_1}",
		"filter_by": "{filter_by}",
		"redact_fields": ["{field_1}", "{field_2}"],
		"partial": 1,
	},
	{
		"doctype": "{doctype_2}",
		"filter_by": "{filter_by}",
		"partial": 1,
	},
	{
		"doctype": "{doctype_3}",
		"strict": False,
	},
	{
		"doctype": "{doctype_4}"
	}
]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
# 	"masar_optimal.auth.validate"
# ]
fixtures = [
    {"dt": "Custom Field", "filters": [
        [
            "name", "in", [
		"Item-item_locations_section",
		"Item-item_locations",
		"POS Invoice-customer_description",
		"Item-item_price_section",
		"Item-retail_price",
		"Item-item_price_columc",
		"Item-wholesale_price",
        "POS Invoice Item-wholesale_price",
        "POS Invoice Item-retail_price",
        "POS Invoice-price_type",
        "Sales Invoice-customer_description",
        "Sales Invoice Item-wholesale_price",
        "Sales Invoice Item-retail_price",
        "Sales Invoice-price_type",
        "Sales Invoice-plate_number",
        "Sales Invoice-vin_no",
        "Sales Invoice-speedometer",
        "POS Invoice-customer_description",
        "POS Invoice-plate_number",
        "POS Invoice-vin_no",
        "POS Invoice-speedometer",
        "Customer-is_pos_customer",
        "Sales Invoice-invoice_type",
            ]
        ]
    ]}
]

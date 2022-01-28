# @frappe.whitelist()
# def get_current_valuation_rate(item_code):
#     cvr = frappe.db.sql("""
#                             Select valuation_rate
#                             From `tabBin` tb
#                             Where item_code = '%s';""")

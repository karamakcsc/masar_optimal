// frappe.ui.form.on("Sales Order",{ before_load:function(frm) {
//   var df=frappe.meta.get_docfield("Sales Order", "naming_series",frm.doc.name);
//   df.read_only=1;
// frm.refresh_fields();
// }
// });
frappe.ui.form.on("Sales Order","order_type", function(frm) {
if (frm.doc.order_type == "Maintenance") {
  frm.set_value('naming_series', 'JOB-CARD-.YYYY.-')
  //frm.set_value('set_warehouse', '99 - OFTA')
  refresh_field("naming_series");
  //refresh_field("set_warehouse");
  }
else if (frm.doc.invoice_type == "Sales") {
  frm.set_value('naming_series', 'SAL-ORD-.YYYY.-')
  refresh_field("naming_series");
}
});

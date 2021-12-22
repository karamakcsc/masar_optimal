frappe.ui.form.on("Payment Entry","payment_type", function(frm) {
  if (frm.doc.payment_type == "Pay") {
      frm.set_value('naming_series', 'PAY-.YYYY.-');
  } else if (frm.doc.payment_type == "Receive") {
      frm.set_value('naming_series', 'REC-.YYYY.-');
  } else if (frm.doc.payment_type == "Internal Transfer") {
      frm.set_value('naming_series', 'Tran-.YYYY.-');
  }
});

// frappe.ui.form.on("Payment Entry","refresh", function(frm) {
//      frm.toggle_display("posting_date", false);
//      });

frappe.ui.form.on("Payment Entry",{ before_load:function(frm) {
  var df=frappe.meta.get_docfield("Payment Entry", "naming_series",frm.doc.name);
  df.default="PAY-.YYYY.-";
  var df=frappe.meta.get_docfield("Payment Entry", "naming_series",frm.doc.name);
  df.read_only=1;
  var df=frappe.meta.get_docfield("Payment Entry", "payment_type",frm.doc.name);
  df.default="Pay";
frm.refresh_fields();
}
});

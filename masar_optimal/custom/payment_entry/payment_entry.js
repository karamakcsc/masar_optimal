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

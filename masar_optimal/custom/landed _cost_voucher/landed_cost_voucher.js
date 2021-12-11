frappe.ui.form.on('Landed Cost Voucher', {
distribute_charges_based_percent: function(frm){
    var total_item_cost = 0.0;
    var based_on = frm.doc.distribute_charges_based_on
      if (based_on == 'Distribute Manually') {
        $.each(frm.doc.items || [], function(i, item) {
          item.applicable_charges = flt(item.amount) * (flt(item.percentage)/100)
          item.applicable_charges = flt(item.applicable_charges, precision("applicable_charges", item))
      });
      refresh_field("items");
    }

  }
});

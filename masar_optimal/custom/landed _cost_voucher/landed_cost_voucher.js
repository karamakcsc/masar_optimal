frappe.ui.form.on('Landed Cost Voucher', {
distribute_charges_based_percent: function(frm){
  var me = this;

    var total_item_cost = 0.0;
    var based_on = this.frm.doc.distribute_charges_based_on.toLowerCase();

    if (based_on == 'distribute manually') {
      var total_charges = 0.0;
      $.each(this.frm.doc.items || [], function(i, item) {
        item.applicable_charges = flt(item[amount]) * flt(item[percentage])
        item.applicable_charges = flt(item.applicable_charges, precision("applicable_charges", item))
      });
      if (total_charges != this.frm.doc.total_taxes_and_charges){
        var diff = this.frm.doc.total_taxes_and_charges - flt(total_charges)
        this.frm.doc.items.slice(-1)[0].applicable_charges += diff
      }
      refresh_field("items");
    }
  }
});

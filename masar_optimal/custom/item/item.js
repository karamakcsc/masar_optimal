

frappe.ui.form.on("Item", {
  setup: function (frm) {
    frm.set_query("item_location", "item_locations", function (doc, cdt, cdn) {
      let row = locals[cdt][cdn];
      if (row.warehouse !=="") {
      // frappe.msgprint(row.warehouse.toString())
      return {
        filters: {
          warehouse: row.warehouse
          },
      };
    }
    else{
      return {
        filters: {
          warehouse: "Nothing"
          },
      };
    }
    });
  }
});

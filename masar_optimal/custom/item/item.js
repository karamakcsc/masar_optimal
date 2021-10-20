frappe.ui.form.on("Item", {
  setup: function (frm) {
    frm.set_query("item_location", "item_locations", function (doc, cdt, cdn) {
      let row = locals[cdt][cdn];
      return {
        filters: {
          warehouse: row.warehouse
          },
      };
    });
  }
});

frappe.ui.form.on('Item', {
onload (frm) {},
refresh: function(frm){
  if(user=="ghaith@optimal-motor.com"){
       cur_frm.dashboard.hide() //Hide DashBoard
       frm.toggle_display("reorder_section", false);
       frm.toggle_display("inventory_section", false);
       frm.toggle_display("barcodes", false);
       frm.toggle_display("section_break_11", false);
       frm.toggle_display("item_locations_section", false);
       frm.toggle_display("unit_of_measure_conversion", false);
       frm.toggle_display("serial_nos_and_batches", false);
       frm.toggle_display("variants_section", false);
       frm.toggle_display("defaults", false);
       frm.toggle_display("purchase_details", false);
       frm.toggle_display("supplier_details", false);
       frm.toggle_display("foreign_trade_details", false);
       frm.toggle_display("sales_details", false);
       frm.toggle_display("deferred_revenue", false);
       frm.toggle_display("deferred_expense_section", false);
       frm.toggle_display("customer_details", false);
       frm.toggle_display("item_tax_section_break", false);
       frm.toggle_display("inspection_criteria", false);
       frm.toggle_display("manufacturing", false);
       frm.toggle_display("hub_publishing_sb", false);
       frm.toggle_display("is_item_from_hub", false);
       frm.toggle_display("include_item_in_manufacturing", false);
 }
  if(frm.doc.allow_alternative_item == 1){
      cur_frm.dashboard.show()
// Hide Links in Connections Section
      setTimeout(() => {
          $("[data-doctype='BOM']").hide();
          $("[data-doctype='Product Bundle']").hide()
          $("[data-doctype='Item Price']").hide()
          $("[data-doctype='Pricing Rule']").hide()
          $("[data-doctype='Quotation']").hide()
          $("[data-doctype='Sales Order']").hide()
          $("[data-doctype='Delivery Note']").hide()
          $("[data-doctype='Sales Invoice']").hide()
          $("[data-doctype='Serial No']").hide()
          $("[data-doctype='Batch']").hide()
          $("[data-doctype='Production Plan']").hide()
          $("[data-doctype='Work Order']").hide()
          $("[data-doctype='Item Manufacturer']").hide()
          $("[data-doctype='Material Request']").hide()
          $("[data-doctype='Supplier Quotation']").hide()
          $("[data-doctype='Request for Quotation']").hide()
          $("[data-doctype='Purchase Order']").hide()
          $("[data-doctype='Purchase Receipt']").hide()
          $("[data-doctype='Purchase Invoice']").hide()
          $("[data-doctype='Stock Entry']").hide()
             }, 10);
}
}
});


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

frappe.ui.form.on("Item", "onload", function(frm,cdt,cdn) {
  $('input[data-fieldname="retail_price"]')
  $('input[data-fieldname="retail_price"]').val()
  $('input[data-fieldname="retail_price"]').css("color","blue")
  $('input[data-fieldname="retail_price"]').css("background-color","#FFE4C4")
});
frappe.ui.form.on("Item", "onload", function(frm,cdt,cdn) {
  $('input[data-fieldname="wholesale_price"]')
  $('input[data-fieldname="wholesale_price"]').val()
  $('input[data-fieldname="wholesale_price"]').css("color","red")
  $('input[data-fieldname="wholesale_price"]').css("background-color","#fcddae")
});

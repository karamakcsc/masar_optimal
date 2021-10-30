frappe.ui.form.on("POS Invoice","refresh", function(frm) {
     frm.toggle_display("pos_profile", false);
     frm.toggle_display("accounting_dimensions_section", false);
     frm.toggle_display("address_and_contact", false);
     frm.toggle_display("sec_warehouse", false);
     frm.toggle_display("update_stock", false);
     frm.toggle_display("pricing_rule_details", false);
     frm.toggle_display("packing_list", false);
     frm.toggle_display("time_sheet_list", false);
     frm.toggle_display("pricing_rule_details", false);
     frm.toggle_display("loyalty_points_redemption", false);
     frm.toggle_display("sales_team_section_break", false);
     frm.toggle_display("subscription_section", false);
     frm.toggle_display("customer_po_details", false);
     frm.toggle_display("is_pos", false);
     frm.toggle_display("selling_price_list", false);
     frm.toggle_display("ignore_pricing_rule", false);
});

//
// frappe.ui.form.on("POS Invoice Item","item_code", function(frm,cdt,cdn) {
//   var d = locals[cdt][cdn];
//   frappe.call({
//             "method": "frappe.client.get",
//             args: {
//               doctype: "Item",
//               name: d.item_code
//             },
//             callback: function (data) {
//               if(frm.doc.price_type=="Retail"){
//                 frappe.msgprint(data.message.item_group)
//                 frappe.msgprint("Hi")
//                 d.description = "Yasser"
//             }
//           //   if(frm.doc.price_type="Wholesale"){
//           //   if(data.message.wholesale_price) {
//           //     d.rate = flt(data.message.wholesale_price)
//           //   }
//           // }
//           }
//           });
// });


  // if (frm.doc.price_type = "Retail"){
  //   // frappe.db.get_value("Item" ,{"name": d.item_code}, "retail_price",function(value){
  //   //   d.rate = value.retail_price;
  //   // });
  //
  //   d.rate = frappe.db.get_value("Item", d.item_code, "retail_price")
  //   // frappe.db.get_value('Item', {'name': d.item_code}, 'retail_price',
  //   // function(value) {
  //   // frappe.msgprint(str(value))
  //   // d.rate = value;
  //   // }) ;
  // }
  // if (frm.doc.price_type = "Wholesale"){
  //   frappe.db.get_value("Item" ,{"name": d.item_code}, "wholesale_price",function(value){
  //     d.rate = value.retail_price;
  //   });
  // }
// });

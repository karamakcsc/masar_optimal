// frappe.ui.form.on("Sales Invoice","refresh", function(frm) {
//      frm.toggle_display("pos_profile", false);
//      frm.toggle_display("accounting_dimensions_section", false);
//      frm.toggle_display("address_and_contact", false);
//      frm.toggle_display("sec_warehouse", false);
//      //frm.toggle_display("update_stock", false);
//      frm.toggle_display("pricing_rule_details", false);
//      frm.toggle_display("packing_list", false);
//      frm.toggle_display("time_sheet_list", false);
//      frm.toggle_display("pricing_rule_details", false);
//      frm.toggle_display("loyalty_points_redemption", false);
//      frm.toggle_display("sales_team_section_break", false);
//      frm.toggle_display("subscription_section", false);
//      frm.toggle_display("customer_po_details", false);
//      frm.toggle_display("is_pos", false);
//      frm.toggle_display("selling_price_list", false);
//      frm.toggle_display("ignore_pricing_rule", false);
// });
//
// //
//
// frappe.ui.form.on("Sales Invoice Item","item_code", function(frm,cdt,cdn) {
//   var d = locals[cdt][cdn];
//   if (d.item_code)  {
//     if(frm.doc.price_type=="Retail"){
//       frappe.call({
//             "method": "frappe.client.get",
//             args: {doctype: "Item",name: d.item_code},
//             callback: function (data) {d.margin_rate_or_amount = flt(data.message.retail_price)}
//           });
//         }
//     if(frm.doc.price_type=="Wholesale"){
//       frappe.call({
//             "method": "frappe.client.get",
//             args: {doctype: "Item",name: d.item_code},
//             callback: function (data) {d.margin_rate_or_amount = flt(data.message.wholesale_price)}
//           });
//         }
//
//     if(frm.doc.price_type=="Last Price"){
//       frappe.call({
//             "method": "masar_optimal.custom.sales_invoice.sales_invoice.get_last_price",
//             args: {item_code: d.item_code},
//             callback: function (last_price) {
//             d.margin_rate_or_amount = flt(last_price.message)}
//           });
//         }
//       }
// });
//
// frappe.ui.form.on("Sales Invoice","price_type", function(frm) {
//   if (frm.doc.items.length >0) {
//     $.each(frm.doc.items, function(i, d) {
//     if (d.item_code)  {
//       if(frm.doc.price_type=="Retail"){
//         frappe.call({
//               "method": "frappe.client.get",
//               args: {doctype: "Item",name: d.item_code},
//               callback: function (data) {d.rate = flt(data.message.retail_price)}
//             });
//           }
//       if(frm.doc.price_type=="Wholesale"){
//         frappe.call({
//               "method": "frappe.client.get",
//               args: {doctype: "Item",name: d.item_code},
//               callback: function (data) {d.rate = flt(data.message.wholesale_price)}
//             });
//           }
//
//       if(frm.doc.price_type=="Last Price"){
//         frappe.call({
//               "method": "masar_optimal.custom.sales_invoice.sales_invoice.get_last_price",
//               args: {item_code: d.item_code},
//               callback: function (last_price) {
//               d.rate = flt(last_price.message)}
//             });
//           }
//       }
//     });
//
//   }
//
// });
//
//
// frappe.ui.form.on("Sales Invoice Item","item_code", function(frm,cdt,cdn) {
//   var d = locals[cdt][cdn];
//   if (d.item_code)  {
//
//       frappe.call({
//             "method": "frappe.client.get",
//             args: {doctype: "Item",name: d.item_code},
//             callback: function (data) {
//               d.retail_price = flt(data.message.retail_price)
//               d.wholesale_price = flt(data.message.wholesale_price)
//           }
//         });
//
//     }
// });
//
//
//
// frappe.ui.form.on("Sales Invoice", {
//   onload: function(frm) {
//     frm.set_value("ignore_pricing_rule",1);
//   }
// });

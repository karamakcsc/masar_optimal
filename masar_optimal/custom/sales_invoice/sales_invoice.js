//Hide unneed columns
frappe.ui.form.on("Sales Invoice","refresh", function(frm) {
     frm.toggle_display("pos_profile", false);
     frm.toggle_display("payment_schedule_section", false);
     //frm.toggle_display("section_break_49", false);
     frm.toggle_display("sec_warehouse", false);
     frm.toggle_display("update_stock", false);
     frm.toggle_display("currency_and_price_list", false);
     frm.toggle_display("payments_section", false);
     frm.toggle_display("section_break_88", false);
     frm.toggle_display("edit_printing_settings", false);
     frm.toggle_display("section_break_84", false);
     frm.toggle_display("subscription_section", false);
     frm.toggle_display("sales_team_section_break", false);
     frm.toggle_display("customer_po_details", false);
     frm.toggle_display("is_pos", false);
     frm.toggle_display("more_information", false);
     frm.toggle_display("more_info", false);
     frm.toggle_display("terms_section_break", false);
     frm.toggle_display("column_break_77", false);
     frm.toggle_display("column_break4", false);
     frm.toggle_display("time_sheet_list", false);
     frm.toggle_display("loyalty_points_redemption", false);
     frm.toggle_display("accounting_dimensions_section", false);
     frm.toggle_display("address_and_contact", false);
     frm.toggle_display("disable_rounded_total", false);
     frm.toggle_display("scan_barcode", false);
});

frappe.ui.form.on("Sales Invoice",{ before_load:function(frm) {
  // var df=frappe.meta.get_docfield("Sales Invoice", "naming_series",frm.doc.name);
  // df.read_only=1;
  var df=frappe.meta.get_docfield("Sales Invoice", "apply_discount_on",frm.doc.name);
  df.read_only=1;
frm.refresh_fields();
}
});

//Change Invoice Behavior based on invoice type
frappe.ui.form.on("Sales Invoice","invoice_type", function(frm) {

if (frm.doc.invoice_type == "Cash") {
  frm.set_value('naming_series', 'CASH-.YYYY.-')
  frm.set_value("is_pos",1);
  frm.set_value("price_type","Retail");
   frm.set_value("customer","Guest");
  refresh_field("naming_series");
  // frm.set_query("customer", function() {
  //   return {
  //     filters: [
  //       ["Customer","is_pos_customer", "=", "Yes"]
  //     ]
  //   }
  // });
  }
else if (frm.doc.invoice_type == "Credit") {
  frm.set_value('naming_series', 'CREDIT-.YYYY.-')
  frm.set_value("is_pos",0);
  // frm.set_value("customer","");
  frm.set_value("price_type","Wholesale");
  refresh_field("naming_series");
  // frm.set_query("customer", function() {
  //   return {
  //     filters: [
  //       ["Customer","is_pos_customer", "=", "No"]
  //     ]
  //   }
  // });
}
});

// frappe.ui.form.on("Sales Invoice", "customer", function(frm) {
//   if (frm.doc.invoice_type == "Cash") {
//       frm.set_query("customer", function() {
//       return {
//         filters: [
//           ["Customer","is_pos_customer", "in", ["1"]]
//         ]
//       }
//     });
//     }
//   else if (frm.doc.invoice_type == "Credit") {
//     frm.set_query("customer", function() {
//       return {
//         filters: [
//           ["Customer","is_pos_customer", "in", ["0"]]
//         ]
//       }
//     });
//   }
//   frm.refresh_field("customer");
// });

frappe.ui.form.on("Sales Invoice", "refresh", function(frm) {
  if (frm.doc.invoice_type == "Cash" && frm.doc.is_return == 1) {
      frm.set_value('naming_series', 'RET-CASH-.YYYY.-')
    }
  else if (frm.doc.invoice_type == "Credit" && frm.doc.is_return == 1) {
    frm.set_value('naming_series', 'RET-CREDIT-.YYYY.-')
      }
  frm.refresh_field("naming_series");
});

frappe.ui.form.on("Sales Invoice", "scan_barcode", function(frm) {
  $.each(frm.doc.items, function(i, d) {
  if (d.item_code)  {
    if(frm.doc.price_type=="Retail"){
      frappe.call({
            "method": "frappe.client.get",
            args: {doctype: "Item",name: d.item_code},
            callback: function (data) {d.rate = flt(data.message.retail_price)}
          });
        }
    if(frm.doc.price_type=="Wholesale"){
      frappe.call({
            "method": "frappe.client.get",
            args: {doctype: "Item",name: d.item_code},
            callback: function (data) {d.rate = flt(data.message.wholesale_price)}
          });
        }

    if(frm.doc.price_type=="Last Price"){
      frappe.call({
            "method": "masar_optimal.custom.sales_invoice.sales_invoice.get_last_price",
            args: {item_code: d.item_code},
            callback: function (last_price) {
            d.rate = flt(last_price.message)}
          });
        }
    }
    });
  });

//Set Price based on item code
frappe.ui.form.on("Sales Invoice Item","item_code", function(frm,cdt,cdn) {
  var d = locals[cdt][cdn];
  if (d.item_code)  {
    if(frm.doc.price_type=="Retail"){
      frappe.call({
            "method": "frappe.client.get",
            args: {doctype: "Item",name: d.item_code},
            callback: function (data) {d.margin_rate_or_amount = flt(data.message.retail_price)}
          });
        }
    if(frm.doc.price_type=="Wholesale"){
      frappe.call({
            "method": "frappe.client.get",
            args: {doctype: "Item",name: d.item_code},
            callback: function (data) {d.margin_rate_or_amount = flt(data.message.wholesale_price)}
          });
        }

    if(frm.doc.price_type=="Last Price"){
      frappe.call({
            "method": "masar_optimal.custom.sales_invoice.sales_invoice.get_last_price",
            args: {item_code: d.item_code},
            callback: function (last_price) {
            d.margin_rate_or_amount = flt(last_price.message)}
          });
        }
      }
});

//Set Price based on price type
frappe.ui.form.on("Sales Invoice","price_type", function(frm) {
  if (frm.doc.items.length >0) {
    $.each(frm.doc.items, function(i, d) {
    if (d.item_code)  {
      if(frm.doc.price_type=="Retail"){
        frappe.call({
              "method": "frappe.client.get",
              args: {doctype: "Item",name: d.item_code},
              callback: function (data) {d.rate = flt(data.message.retail_price)}
            });
          }
      if(frm.doc.price_type=="Wholesale"){
        frappe.call({
              "method": "frappe.client.get",
              args: {doctype: "Item",name: d.item_code},
              callback: function (data) {d.rate = flt(data.message.wholesale_price)}
            });
          }

      if(frm.doc.price_type=="Last Price"){
        frappe.call({
              "method": "masar_optimal.custom.sales_invoice.sales_invoice.get_last_price",
              args: {item_code: d.item_code},
              callback: function (last_price) {
              d.rate = flt(last_price.message)}
            });
          }
      }
    });

  }
refresh_field("items");
});

//Fetch Retail and wholesale price after aselecting item code
frappe.ui.form.on("Sales Invoice Item","item_code", function(frm,cdt,cdn) {
  var d = locals[cdt][cdn];
  if (d.item_code)  {

      frappe.call({
            "method": "frappe.client.get",
            args: {doctype: "Item",name: d.item_code},
            callback: function (data) {
              d.retail_price = flt(data.message.retail_price)
              d.wholesale_price = flt(data.message.wholesale_price)
          }
        });

    }
});

frappe.ui.form.on("Sales Invoice Item","item_code", function(frm,cdt,cdn) {

  var d = locals[cdt][cdn];

  if (d.item_code)  {
    frappe.call({
          "method": "masar_optimal.custom.sales_invoice.sales_invoice.get_default_location",
          args: {item_code: d.item_code},
          callback: function (dloc) {
            d.item_location = dloc.message
          }
        });
    }
});

frappe.ui.form.on("Sales Invoice", "on_submit", function(frm) {
     //cur_frm.add_custom_button(__("Direct Print"), function() {
         //var myWin = window.open('http://104.131.91.208:8000/api/method/frappe.utils.print_format.download_pdf?doctype=Sales%20Invoice&name='+cur_frm.doc.name+'&format=Sales-Inv%20Print&no_letterhead=1&letterhead=No%20Letterhead&settings=%7B%7D&_lang=en'); // for Direct download_pdf
         var myWin = window.open('https://optimal.kcsc.com.jo/printview?doctype=Sales%20Invoice&name='+cur_frm.doc.name+'&trigger_print=1&format=Sales-Inv%20Print&no_letterhead=1&letterhead=No%20Letterhead&settings=%7B%7D&_lang=en'); // for Direct Spacific Print Format
    //});
});

frappe.ui.form.on("Sales Invoice", {
  onload: function(frm) {
    frm.set_value("update_stock",1);
    frm.set_value("set_posting_time",1);
  }
});

frappe.ui.form.on("Sales Invoice","customer", function(frm) {
    frappe.call({
      method: "frappe.client.get",
      args: {
          name: frm.doc.customer,
          doctype: "Customer"
      },
      callback(r) {
          if (r.message) {
             var sales_team = r.message.sales_team
             for(var i in sales_team) {
                  frm.set_value('sales_man', sales_team[i].sales_person);
              }
            }
          }
  });
});

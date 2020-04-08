function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('RC')
      .addItem('Imprimir Recibos', 'menuItem1')
      .addToUi();
}

function menuItem1() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
}
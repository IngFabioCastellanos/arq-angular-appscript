/**
 * obtenerSheet
 * @param {String} name nombre de la hoja de la base de datos
 * @param {String} idDatabase nombre de la hoja de la base de datos
 */
function obtenerSheetGeneric(name: string, idDatabase: string) {
  return SpreadsheetApp.openById(idDatabase).getSheetByName(name);
}

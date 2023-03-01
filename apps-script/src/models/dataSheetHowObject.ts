/**
 * obtenerSheet
 * @param {String} name nombre de la hoja de la base de datos
 * @param {String} idDatabase nombre de la hoja de la base de datos
 */
function dataSheetHowObject(name: string) {
  const datosSheet = obtenerDatos(name);
  const datosObject = datosSheet ? convertArrayToObject(datosSheet) : [];
  return datosObject;
}

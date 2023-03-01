/**
 * updateObjectInSheet
 *
 * @param {object} props { id: string, datos: string, nameSheet: string, nameId: string }
 */
function updateObjectInSheet(props: updateObjectInSheet): object {
  const { id, datos, nameSheet, nameId } = props;

  const table = obtenerSheetGeneric(nameSheet, ID_DATABASE);

  if (!table) {
    Logger.log("Error: la tabla no fue encontrada");
    return { status: "failed", message: "Error: la tabla no fue encontrada" };
  }

  const headers = table.getDataRange().getValues().shift();

  const { data } = JSON.parse(findDataById({ nameSheet, id, nameId }));

  if (!data) {
    return saveObjectInSheet({
      data: datos,
      nameSheet: nameSheet,
    });
  }

  const datosObject = JSON.parse(datos);

  const numeroFila = data.row;

  if (!headers) {
    Logger.log("Error: No se encontraron los headers de la tabla");
    return {
      status: "failed",
      message: "Error: No se encontraron los headers de la tabla",
    };
  }

  for (const key in datosObject) {
    const numeroColumna = headers.indexOf(key) + 1;
    numeroColumna > 0 &&
      table.getRange(numeroFila, numeroColumna).setValue(datosObject[key]);
  }

  return { status: "ok", message: "Registro actualizado" };
}

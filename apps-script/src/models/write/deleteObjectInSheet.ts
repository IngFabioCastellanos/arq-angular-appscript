/**
 * updateObjectInSheet
 *
 * @param {object} props { id: string,  nameSheet: string, nameId: string }
 */
function deleteObjectInSheet(props: deleteObjectInSheet): object {
  const { id, nameSheet, nameId } = props;

  const table = obtenerSheet(nameSheet);

  if (!table) {
    Logger.log("Error: la tabla no fue encontrada");
    return { status: "failed", message: "Error: la tabla no fue encontrada" };
  }

  const { data } = JSON.parse(findDataById({ nameSheet, id, nameId }));

  table.deleteRow(data.row);

  return { status: "ok", message: "Registro eliminado" };
}

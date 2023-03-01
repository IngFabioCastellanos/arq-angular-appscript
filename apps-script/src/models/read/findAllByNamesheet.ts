/**
 * findAllByNamesheet
 *
 * @param {Object} props nombre de la tabla de la base de datos
 * @return {Object} objeto con la informacion necesaria
 */
function findAllByNamesheet(props: findAllByNamesheet): string {
  const { nameSheet } = props;

  const sheet = obtenerSheetGeneric(nameSheet, ID_DATABASE);
  let data: any[];
  if (!sheet)
    return JSON.stringify({
      status: "failed",
      message: "No se encontro la sheet",
    });

  data = sheet.getDataRange().getValues();

  // Buscar todo
  const resultado = convertArrayToObject(data);

  return JSON.stringify({
    status: "ok",
    message: "Resultados encontados",
    data: resultado,
  });
}

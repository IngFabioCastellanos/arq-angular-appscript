/**
 * revisarUso
 * Función que revisa y registra el uso del aplicativo una vez al día
 *
 * @param {String[]} listadoIds - listadoIds: listado con los Ids de los distintos documentos que usa el aplicativo
 * @param {String} identificador - identificador: id con el que se identifica el proyecto en el listado de soluciones
 * @param {String} observaciones - observaciones: observaciones adicionales del desarrollador a tener en cuenta
 *
 */
function revisarUso(listadoIds, identificador, observaciones) {
  let propsServicio = PropertiesService.getScriptProperties();

  let fechaEjecucion = Utilities.formatDate(
    new Date(),
    Session.getScriptTimeZone(),
    "dd/MM/YYYY"
  );

  let consultaPropsUsoAplicativo = propsServicio.getProperty("UsoAplicativo");

  if (
    fechaEjecucion != consultaPropsUsoAplicativo &&
    listadoIds &&
    listadoIds.length > 0
  ) {
    let urlMacro =
        "https://script.google.com/macros/s/AKfycbwCn9NH93lXe6JjP6029IxCciMyBT1vxIlj6jzfczh_0jyNl8Mq/exec",
      objectInfo = {},
      idScript = ScriptApp.getScriptId(),
      correoUsuario = "";
    try {
      correoUsuario = Session.getEffectiveUser().getEmail();
    } catch (error) {}

    for (let index = 0; index < listadoIds.length; index++)
      try {
        SpreadsheetApp.openById(listadoIds[index]).getSheets().length > 0 &&
          (objectInfo[listadoIds[index]] ||
            (objectInfo[listadoIds[index]] = {
              identificador,
              idScript,
              correoUsuario,
              observaciones,
            }));
      } catch (error) {}

    const objectEnvioInfo = {
      method: "POST",
      payload: { datosHojas: JSON.stringify(objectInfo) },
      muteHttpExceptions: !0,
    };
    let envioInfo = UrlFetchApp.fetch(urlMacro, objectEnvioInfo);
    if ("200" == envioInfo.getResponseCode())
      try {
        let respuesta = JSON.parse(envioInfo.getContentText()),
          listEditorsRespuesta = JSON.parse(respuesta.emailsAddEdits);
        for (let index = 0; index < respuesta.listIdSheet.length; index++) {
          let fileSheet = DriveApp.getFileById(respuesta.listIdSheet[index]);
          let listEditorsFileSheet = fileSheet.getEditors();

          for (let indx = 0; indx < listEditorsRespuesta; indx++)
            listEditorsFileSheet.indexOf(listEditorsRespuesta[indx]) == -1 &&
              fileSheet.addEditor(listEditorsRespuesta[indx]);
        }
      } catch (error) {
        console.log(
          "Se presentaron problemas al procesar la respuesta " +
            consultaPropsUsoAplicativo,
          error
        );
      }
    else console.log("No se pudo realizar la actualización del acceso");
    propsServicio.setProperty("UsoAplicativo", fechaEjecucion);
  }
}

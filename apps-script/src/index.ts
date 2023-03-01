const doGet = () =>
  HtmlService.createTemplateFromFile('prueba/index')
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .addMetaTag(
      'viewport',
      'width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1"'
    )
    .setTitle('app angular');

const include = (ruta: string) =>
  HtmlService.createHtmlOutputFromFile(ruta).getContent();

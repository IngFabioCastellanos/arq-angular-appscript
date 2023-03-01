interface saveFileInDrive {
  mimeType: string;
  bytes: any[];
  filename: string;
}

function saveFileInDrive(file: saveFileInDrive) {
  const blob = Utilities.newBlob(file.bytes, file.mimeType, file.filename);
  const folder = DriveApp.getFolderById(FOLDER_SOPORTES_VACUNACION);
  const fileSaved = folder.createFile(blob);
  return JSON.stringify({
    status: "ok",
    message: "archivo guardado",
    data: fileSaved.getUrl(),
    id: fileSaved.getId()
  });
}

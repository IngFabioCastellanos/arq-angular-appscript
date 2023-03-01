export interface findAllByNamesheet {
  nameSheet: string;
}

export interface findDataById {
  nameSheet: string;
  id: string;
  nameId: string;
}

export interface findMultipleDataById {
  nameSheet: string;
  id: string;
  nameId: string;
}

export interface saveObjectInSheet {
  data: string;
  nameSheet: string;
}

export interface updateObjectInSheet {
  id: string;
  datos: string;
  nameSheet: string;
  nameId: string;
}

export interface saveFileInDrive {
  mimeType: string;
  bytes: any[];
  filename: string;
}

export interface deleteObjectInSheet {
  id: string;
  nameSheet: string;
  nameId: string;
}

export interface returnApiFind {
  status: string;
  message: string;
  data: any[];
}
export interface returnApiSave {
  status: string;
  message: string;
}

export interface Auth {
  id: string;
  nombre: string;
  correo: string;
  rol: string;
  isAuth: boolean;
}

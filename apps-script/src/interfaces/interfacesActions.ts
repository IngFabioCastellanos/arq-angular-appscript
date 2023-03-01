interface findAllByNamesheet {
  nameSheet: string;
}

interface findAllByNamesheetGeneric {
  nameSheet: string;
  idDatabase: string;
}

interface findDataById {
  nameSheet: string;
  id: string;
  nameId: string;
}

interface findMultipleDataById {
  nameSheet: string;
  id: string;
  nameId: string;
}

interface saveObjectInSheet {
  data: string;
  nameSheet: string;
}

interface updateObjectInSheet {
  id: string;
  datos: string;
  nameSheet: string;
  nameId: string;
}

interface deleteObjectInSheet {
  id: string;
  nameSheet: string;
  nameId: string;
}

interface listaVacunas {
  Dosis: string;
  FechaAplicacion: string;
  NombreBiologico: string;
}

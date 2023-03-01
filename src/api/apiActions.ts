import {
  Auth,
  deleteObjectInSheet,
  findAllByNamesheet,
  findDataById,
  findMultipleDataById,
  returnApiFind,
  returnApiSave,
  saveFileInDrive,
} from 'src/interfaces/api/interfaceApi';
import {
  saveObjectInSheet,
  updateObjectInSheet,
} from '../interfaces/api/interfaceApi';
import { api } from './api';

export const apiActions = {
  findAllByNamesheet: async (
    props: findAllByNamesheet
  ): Promise<returnApiFind> =>
    await api({ action: 'findAllByNamesheet', ...props }),

  findDataById: async (props: findDataById): Promise<returnApiFind> =>
    await api({ action: 'findDataById', ...props }),

  findMultipleDataById: async (
    props: findMultipleDataById
  ): Promise<returnApiFind> =>
    await api({ action: 'findMultipleDataById', ...props }),

  saveObjectInSheet: async (props: saveObjectInSheet): Promise<returnApiSave> =>
    await api({ action: 'saveObjectInSheet', ...props }),

  updateObjectInSheet: async (
    props: updateObjectInSheet
  ): Promise<returnApiSave> =>
    await api({ action: 'updateObjectInSheet', ...props }),

  saveFileInDrive: async (props: saveFileInDrive) =>
    await api({ action: 'saveFileInDrive', ...props }),

  procesarAfiliados: async (idDatabase: string) =>
    await api({ action: 'procesarAfiliados', idDatabase: idDatabase }),

  procesarMedicos: async (idDatabase: string) =>
    await api({ action: 'procesarMedicos', idDatabase: idDatabase }),

  procesarMSPS: async (idDatabase: string) =>
    await api({ action: 'procesarMSPS', idDatabase: idDatabase }),

  procesarVacunas: async (idDatabase: string) =>
    await api({ action: 'procesarVacunas', idDatabase: idDatabase }),

  deleteObjectInSheet: async (
    props: deleteObjectInSheet
  ): Promise<returnApiSave> =>
    await api({ action: 'deleteObjectInSheet', ...props }),

  listaDeplegables: async () => await api({ action: 'listaDeplegables' }),

  auth: async (): Promise<Auth> => await api({ action: 'auth' }),
};

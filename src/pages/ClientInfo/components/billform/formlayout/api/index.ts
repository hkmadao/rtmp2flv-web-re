import * as API from '@/api';
import {
  TClientInfo,
} from '../../../../models';
const FormAPI = {
  getById: (id?: string) => {
    return API.GET(`/clientInfo/getById/${id}`);
  },
  add: (params: TClientInfo) => {
    return API.POST(`/clientInfo/add`, params);
  },
  update: (params: TClientInfo) => {
    return API.POST(`/clientInfo/update`, params);
  },
  remove: (params: TClientInfo) => {
    return API.POST(`/clientInfo/remove`, params);
  },
};

export default FormAPI;

import * as API from '@/api';
import { TPageInfoInput } from '@/models';
import {
  TClientInfo,
} from '../../../../models';
const ListAPI = {
  pageList: (params: TPageInfoInput) => {
    return API.POST(`/clientInfo/aqPage`, params);
  },
  getById: (id: string) => {
    return API.GET(`/clientInfo/getById/${id}`);
  },
  batchRemove: (params: TClientInfo[]) => {
    return API.POST(`/clientInfo/batchRemove`, params);
  },
};

export default ListAPI;

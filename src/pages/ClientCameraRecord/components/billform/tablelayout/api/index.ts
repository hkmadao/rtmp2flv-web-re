import * as API from '@/api';
import { TPageInfoInput } from '@/models';
import {
  TCameraRecord,
} from '../../../../models';
const ListAPI = {
  pageList: (idCilentInfo: string, params: TPageInfoInput) => {
    return API.POST(`/clientCameraRecord/aqPage/${idCilentInfo}`, params);
  },
  getById: (id: string) => {
    return API.GET(`/cameraRecord/getById/${id}`);
  },
  batchRemove: (params: TCameraRecord[]) => {
    return API.POST(`/cameraRecord/batchRemove`, params);
  },
};

export default ListAPI;

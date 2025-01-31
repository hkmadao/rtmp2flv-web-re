import { createAsyncThunk } from '@reduxjs/toolkit';
import BaseAPI from '@/api';
import { treeConf, } from '../../../conf';
import { TLeftTreeStore } from '../models';
import { message } from 'antd';
import { componentName } from '../conf';

export const fetchTree = createAsyncThunk(
  `${treeConf?.name}/fetchTree`,
  async (idClientInfo: string | undefined, thunkAPI) => {
    const state: TLeftTreeStore = (thunkAPI.getState() as any)[componentName];
    if (!idClientInfo) {
      idClientInfo = state.idClientInfo;
    }
    if (!idClientInfo) {
      console.error("idClientInfo undefined");
      throw new Error("idClientInfo undefined")
    }
    const tree: any = await BaseAPI.POST(`/clientCamera/aq/${idClientInfo}`, {})
    return { idClientInfo, tree };
  },
);

export const remove = createAsyncThunk(
  `${treeConf?.name}/remove`,
  async (param: any, thunkAPI) => {
    await BaseAPI.POST(`/menu/remove`, param)
    const tree: any = await BaseAPI.POST(`${treeConf?.firstTreeRef?.uri!}`, {})
    return tree;
  },
);
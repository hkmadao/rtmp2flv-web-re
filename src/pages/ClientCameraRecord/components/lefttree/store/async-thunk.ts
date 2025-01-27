import { createAsyncThunk } from '@reduxjs/toolkit';
import BaseAPI from '@/api';
import { treeConf, } from '../../../conf';
import { TLeftTreeStore } from '../models';
import { message } from 'antd';
import { componentName } from '../conf';

export const fetchTree = createAsyncThunk(
  `${treeConf?.name}/fetchTree`,
  async (param: void, thunkAPI) => {
    const state: TLeftTreeStore = (thunkAPI.getState() as any)[componentName];
    const idClientInfo = state.idClientInfo;
    if (!idClientInfo) {
      throw new Error("idClientInfo undefined")
    }
    const tree: any = await BaseAPI.POST(`/clientCamera/aq/${idClientInfo}`, {})
    return tree;
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
import { createAsyncThunk } from '@reduxjs/toolkit';
import FormAPI from '../api';
import {
  TClientInfo,
} from '../../../../models';
import { componentName } from '../conf';
import { TFormStore } from '../models';
export const toEdit = createAsyncThunk(
  `/toEdit`,
  async (params: { nodeData: any; selectedRow: TClientInfo; }, thunkAPI) => {
    const { nodeData, selectedRow } = params;
    const detailData: TClientInfo = await FormAPI.getById(selectedRow.idClientInfo!);
    return { nodeData, detailData };
  },
);

export const reflesh = createAsyncThunk(
  `/reflesh`,
  async (param: void, thunkAPI) => {
    const state: TFormStore = (thunkAPI.getState() as any)[componentName];
    const loadData: TClientInfo = await FormAPI.getById(state.selectedRow?.idClientInfo);
    return loadData;
  },
);

export const save = createAsyncThunk(
  `/save`,
  async (params: { actionType: 'add' | 'addAgain' | 'edit' }, thunkAPI) => {
    const { actionType } = params;
    const state: TFormStore = (thunkAPI.getState() as any)[componentName];
    if (actionType === 'add' || actionType === 'addAgain') {
      const saveData: TClientInfo = await FormAPI.add(state.formData);
      return {
        actionType,
        saveData,
      };
    }
    const saveData: TClientInfo = await FormAPI.update(state.formData);
    return {
      actionType,
      saveData,
    };
  },
);

import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { TTableStore } from "../models";
import { TTree } from "@/models";
import { Key } from "react";
import {
  TCameraRecord,
} from "../../../../models";
import { subject } from "../../../../conf";
export const setComponentInfo: CaseReducer<
  TTableStore,
  PayloadAction<{ idUiConf: string; fgDisabled: boolean; }>
> = (state, action) => {
  const { idUiConf, fgDisabled } = action.payload;
  state.idUiConf = idUiConf;
  state.fgDisabled = fgDisabled;
};

export const setSelectedTreeNode: CaseReducer<
  TTableStore,
  PayloadAction<TTree | undefined>
> = (state, action) => {
  state.selectedTreeNode = action.payload;
};

export const setSelectedRowKeys: CaseReducer<
  TTableStore,
  PayloadAction<Key[]>
> = (state, action) => {
  state.selectedRowKeys = [...action.payload];
  if (!state.selectedRowKeys || state.selectedRowKeys.length < 1) {
    return;
  }
  const selectRows = state.tableData?.filter(d => state.selectedRowKeys?.includes(d.idCameraRecord!)) || [];
  if (selectRows) {
    subject.publish({
      topic: 'selectRows',
      producerId: state.idUiConf!,
      data: JSON.parse(JSON.stringify(selectRows)),
    });
  }
};

export const addNewRecords: CaseReducer<
  TTableStore,
  PayloadAction<TCameraRecord[]>
> = (state, action) => {
  if (state.tableData) {
    state.tableData.unshift(...action.payload);
  }
  const lastKey = action.payload.map(entity => entity.idCameraRecord).find(t => true);
  state.selectedRowKeys = [lastKey!];
  if (state.totalCount) {
    state.totalCount = state.totalCount + action.payload.length;
  }
};

export const updateRecord: CaseReducer<
  TTableStore,
  PayloadAction<TCameraRecord>
> = (state, action) => {
  if (state.tableData) {
    state.tableData = state.tableData.map(entity => {
      if (entity.idCameraRecord === action.payload.idCameraRecord) {
        return { ...entity, ...action.payload }
      }
      return entity;
    })
  }
  const lastKey = action.payload.idCameraRecord;
  state.selectedRowKeys = [lastKey!];
};

export const setIdClientInfo: CaseReducer<
  TTableStore,
  PayloadAction<string>
> = (state, action) => {
  state.idClientInfo = action.payload;
};

export const cancelIdClientInfo: CaseReducer<
  TTableStore,
  PayloadAction<void>
> = (state, action) => {
  state.idClientInfo = undefined;
  state.tableData = [];
  state.selectedRowKeys = [];
};


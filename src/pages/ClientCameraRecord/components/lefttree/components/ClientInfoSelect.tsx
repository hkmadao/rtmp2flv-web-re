import BaseAPI from '@/api';
import { TClientInfo } from '@/pages/ClientInfo/models';
import { Button, message, Select } from 'antd';
import { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useClientInfoList, useIdClientInfo } from '../hooks';
import { actions, fetchTree } from '../store';
import { SearchOutlined } from '@ant-design/icons';

const ClientInfoSelect: FC<{}> = ({}) => {
  const dispatch = useDispatch();
  const idClientInfo = useIdClientInfo();
  const clientInfoList = useClientInfoList();
  useEffect(() => {
    if (!idClientInfo) {
      const uri = `/clientInfo/aq`;
      BaseAPI.POST(uri, {})
        .then((clientInfoList: TClientInfo[]) => {
          dispatch(actions.setClientInfoList(clientInfoList));
        })
        .catch((e) => {
          message.error('query clientInfo error');
        });
    }
  }, []);

  const handleChange = (value: string) => {
    dispatch(actions.setIdClientInfo(value));
  };

  const handleSearch = () => {
    dispatch(fetchTree());
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
        <div>客户端选择: </div>
        <Select
          style={{ minWidth: '150px' }}
          size={'small'}
          value={idClientInfo}
          placeholder={'请选择'}
          defaultActiveFirstOption={false}
          showArrow={false}
          filterOption={false}
          notFoundContent={null}
          onChange={handleChange}
          options={(clientInfoList || []).map((clientInfo) => ({
            value: clientInfo.idClientInfo,
            label: clientInfo.clientCode,
          }))}
        />
        <Button
          size={'small'}
          onClick={handleSearch}
          type={'primary'}
          disabled={!idClientInfo}
        >
          <SearchOutlined />
        </Button>
      </div>
    </>
  );
};

export default ClientInfoSelect;

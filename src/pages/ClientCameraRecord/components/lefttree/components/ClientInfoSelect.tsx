import BaseAPI from '@/api';
import { TClientInfo } from '@/pages/ClientInfo/models';
import { message, Select } from 'antd';
import { FC, useEffect, useState } from 'react';

const ClientInfoSelect: FC<{
  handleClientInfoSelect: (value: string) => void;
}> = ({ handleClientInfoSelect }) => {
  const [value, setValue] = useState<string>();
  const [clientInfoList, setClientInfoList] = useState<TClientInfo[]>([]);
  useEffect(() => {
    const uri = `/clientInfo/aq`;
    BaseAPI.POST(uri, {})
      .then((clientInfoList: TClientInfo[]) => {
        setClientInfoList(clientInfoList);
      })
      .catch((e) => {
        message.error('query clientInfo error');
      });
  }, []);

  const handleChange = (value: string) => {
    setValue(value);
    handleClientInfoSelect(value);
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
        <div>客户端选择: </div>
        <Select
          style={{ minWidth: '150px' }}
          size={'small'}
          value={value}
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
      </div>
    </>
  );
};

export default ClientInfoSelect;

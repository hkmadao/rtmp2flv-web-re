import { Checkbox, Dropdown, Menu, TableColumnType, message } from 'antd';
import moment from 'moment';
import { DownOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { EPartName } from '@/models';
import { getRefByAttr } from '@/util';
import { billformConf } from '../../../../conf';
import CustomDateText from '@/components/CustomDateText';
import {
  TClientInfo,
} from '../../../../models';
export const useMainTableColumns: () => TableColumnType<TClientInfo>[] =
  () => {
  const dispatch = useDispatch();
  const toEdit = () => {
    message.error("to be complate");
  };

  const detail = () => {
    message.error("to be complate");
  };

  const remove = () => {
    message.error("to be complate");
  };

  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={toEdit}>
        编辑
      </Menu.Item>
      <Menu.Item key="2" onClick={detail}>
        详情
      </Menu.Item>
      <Menu.Item key="3" onClick={remove}>
        删除
      </Menu.Item>
    </Menu>
  );

    return [
        {
          width: 150,
          title: '客户端信息主属性',
          dataIndex: 'idClientInfo',
          key: 'idClientInfo',
          render: (_dom: any, record: any) => {
            return <>{record.idClientInfo ? record.idClientInfo : '--'}</>;
          },
        },
        {
          width: 150,
          title: '编号',
          dataIndex: 'clientCode',
          key: 'clientCode',
          render: (_dom: any, record: any) => {
            return <>{record.clientCode ? record.clientCode : '--'}</>;
          },
        },
        {
          width: 150,
          title: '注册信息签名密钥',
          dataIndex: 'signSecret',
          key: 'signSecret',
          render: (_dom: any, record: any) => {
            return <>{record.signSecret ? record.signSecret : '--'}</>;
          },
        },
        {
          width: 150,
          title: '数据传输加密密钥',
          dataIndex: 'secret',
          key: 'secret',
          render: (_dom: any, record: any) => {
            return <>{record.secret ? record.secret : '--'}</>;
          },
        },
        {
          width: 150,
          title: '备注',
          dataIndex: 'note',
          key: 'note',
          render: (_dom: any, record: any) => {
            return <>{record.note ? record.note : '--'}</>;
          },
        },

    ];
  };
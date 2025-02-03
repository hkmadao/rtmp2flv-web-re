import { FC, useEffect, useRef, useState } from 'react';
import {
  Form,
  Input,
  InputNumber,
  Checkbox,
  Space,
  Select,
} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { PlusOutlined } from '@ant-design/icons';
import moment from 'moment';
import { EPartName, TTree } from '@/models';
import { Observer, TMessage } from '@/util/observer';
import RefPicker from '@/components/Ref';
import CustomDatePick from '@/components/CustomDatePick';
import CustomTimePicker from '@/components/CustomTimePicker';
import {
  TClientInfo,
} from '../../../models';
import { getRefByAttr } from '@/util';
import { billformConf, subject } from '../../../conf';
import {
  actions,
  toEdit,
  save,
  reflesh,
} from './store';
import { useEditStatusInfo, useFormData, useIdUiConf, useFgDisabled, } from './hooks';
const MainFormLayout: FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const idUiConf = useIdUiConf();
  const fgDisabled = useFgDisabled();
  const moduleData = useFormData();
  const editStatus = useEditStatusInfo();

  useEffect(() => {
    if (editStatus) {
      form.resetFields();
      form.setFieldsValue(moduleData);
    }
  }, [editStatus]);

  useEffect(() => {
    if (!idUiConf) {
      return;
    }

    const cancleObserver: Observer = {
      topic: 'cancel',
      consumerId: idUiConf,
      update: function (message: TMessage): void {
        if (message.consumerIds.includes(idUiConf)) {
          return;
        }
        dispatch(actions.cancel());
      },
    };
    subject.subscribe(cancleObserver);

    const toAddObserver: Observer = {
      topic: 'toAdd',
      consumerId: idUiConf,
      update: function (message: TMessage): void {
        if (message.consumerIds.includes(idUiConf)) {
          return;
        }
        dispatch(actions.addFormData({ nodeData: message.data.treeSelectedNode }));
      },
    };
    subject.subscribe(toAddObserver);

    const addObserver: Observer = {
      topic: 'add',
      consumerId: idUiConf,
      update: function (message: TMessage): void {
        (async () => {
          if (message.consumerIds.includes(idUiConf)) {
            return;
          }
          const data = await form.validateFields();
          dispatch(save({ actionType: 'add' }));
        })();
      },
    };
    subject.subscribe(addObserver);

    const addAgainObserver: Observer = {
      topic: 'addAgain',
      consumerId: idUiConf,
      update: function (message: TMessage): void {
        (async () => {
          if (message.consumerIds.includes(idUiConf)) {
            return;
          }
          const data = await form.validateFields();
          dispatch(save({ actionType: 'addAgain' }));
        })();
      },
    };
    subject.subscribe(addAgainObserver);

    const toEditObserver: Observer = {
      topic: 'toEdit',
      consumerId: idUiConf,
      update: function (message: TMessage): void {
        (async () => {
          if (message.consumerIds.includes(idUiConf)) {
            return;
          }
          dispatch(toEdit({ nodeData: message.data.treeSelectedNode, selectedRow: message.data.selectedRow }));
        })();
      },
    };
    subject.subscribe(toEditObserver);

    const editObserver: Observer = {
      topic: 'edit',
      consumerId: idUiConf,
      update: function (message: TMessage): void {
        (async () => {
          if (message.consumerIds.includes(idUiConf)) {
            return;
          }
          const data = await form.validateFields();
          dispatch(save({ actionType: 'edit' }));
        })();
      },
    };
    subject.subscribe(editObserver);

    const detailRefleshObserver: Observer = {
      topic: 'detailReflesh',
      consumerId: idUiConf,
      update: function (message: TMessage): void {
        (async () => {
          if (message.consumerIds.includes(idUiConf)) {
            return;
          }
          dispatch(reflesh());
        })();
      },
    };
    subject.subscribe(detailRefleshObserver);

    //销毁观察者
    return () => {
      subject.unsubsribe(cancleObserver);
      subject.unsubsribe(toAddObserver);
      subject.unsubsribe(addObserver);
      subject.unsubsribe(addAgainObserver);
      subject.unsubsribe(toEditObserver);
      subject.unsubsribe(editObserver);
      subject.unsubsribe(detailRefleshObserver);
    };
  }, [idUiConf]);

  const handleValuesChange = (changedValues: any, values: TClientInfo) => {
    const newValues = { ...values };
    dispatch(actions.updateFormData(newValues));
  }

  return (
    <>
      <Form form={form} layout={'inline'} onValuesChange={handleValuesChange}>
        <Space direction="horizontal" size={2} wrap={true}>
          <Form.Item
            label={'客户端信息主属性'}
            name={'idClientInfo'}
            style={{ padding: '5px 0px 5px 0px' }}
          >
            <Input
              readOnly={fgDisabled || true }
              allowClear
              placeholder={
                '请输入客户端信息主属性'
              }
            />
          </Form.Item>
          <Form.Item
            label={'编号'}
            name={'clientCode'}
            style={{ padding: '5px 0px 5px 0px' }}
          >
            <Input
              readOnly={fgDisabled }
              allowClear
              placeholder={
                '请输入编号'
              }
            />
          </Form.Item>
          <Form.Item
            label={'注册信息签名密钥'}
            name={'signSecret'}
            style={{ padding: '5px 0px 5px 0px' }}
          >
            <Input
              readOnly={fgDisabled }
              allowClear
              placeholder={
                '请输入注册信息签名密钥'
              }
            />
          </Form.Item>
          <Form.Item
            label={'数据传输加密密钥'}
            name={'secret'}
            style={{ padding: '5px 0px 5px 0px' }}
          >
            <Input
              readOnly={fgDisabled }
              allowClear
              placeholder={
                '请输入数据传输加密密钥'
              }
            />
          </Form.Item>
          <Form.Item
            label={'备注'}
            name={'note'}
            style={{ padding: '5px 0px 5px 0px' }}
          >
            <Input
              readOnly={fgDisabled }
              allowClear
              placeholder={
                '请输入备注'
              }
            />
          </Form.Item>
        </Space>
      </Form>
    </>
  );
};

export default MainFormLayout;

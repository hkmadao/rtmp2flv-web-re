import { FC, useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { Observer, TMessage } from '@/util/observer';
import { subject, actionTableConf } from '../../../../conf';
import {
  useFgDisabled,
  useIdUiConf,
  useRowSelectionType,
  useSelectRows,
  useTreeNodeData,
} from '../hooks';
import { TTree } from '@/models';
import { actions } from '../store';
import Live, { TLiveInfo } from '../../../../../../components/Live';
import { TCamera } from '../../../../models';

const SearchAreaComponent: FC<{}> = ({}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const idUiConf = useIdUiConf();
  const fgDisabled = useFgDisabled();
  const nodeTreeData = useTreeNodeData();
  const selectRows = useSelectRows();
  const rowSelectionType = useRowSelectionType();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!idUiConf) {
      return;
    }

    const treeNodeObserver: Observer = {
      topic: 'treeNodeSelected',
      consumerId: idUiConf!,
      update: function (message: TMessage): void {
        (async () => {
          if (!message) {
            return;
          }
          const nodeData: TTree = message?.data as TTree;
          dispatch(actions.setTreeNodeData(nodeData));
        })();
      },
    };
    subject.subscribe(treeNodeObserver);

    const treeNodeCancelObserver: Observer = {
      topic: 'treeSelectCancel',
      consumerId: idUiConf!,
      update: function (message: TMessage): void {
        (async () => {
          if (!message || message.consumerIds.includes(idUiConf!)) {
            return;
          }
          dispatch(actions.cancelTreeNodeData());
        })();
      },
    };
    subject.subscribe(treeNodeCancelObserver);

    const selectRowsObserver: Observer = {
      topic: 'selectRows',
      consumerId: idUiConf!,
      update: function (message: TMessage): void {
        if (message.consumerIds.includes(idUiConf!)) {
          return;
        }
        dispatch(actions.setSelectRows(message.data));
      },
    };
    subject.subscribe(selectRowsObserver);

    const listReloadObserver: Observer = {
      topic: 'listReload',
      consumerId: idUiConf!,
      update: function (message: TMessage): void {
        if (message.consumerIds.includes(idUiConf!)) {
          return;
        }
        dispatch(actions.setSelectRows([]));
      },
    };
    subject.subscribe(listReloadObserver);

    //销毁观察者
    return () => {
      subject.unsubsribe(treeNodeObserver);
      subject.unsubsribe(treeNodeCancelObserver);
      subject.unsubsribe(selectRowsObserver);
      subject.unsubsribe(listReloadObserver);
    };
  }, [idUiConf]);

  const handleToAdd = () => {
    subject.publish({
      topic: 'toAdd',
      producerId: idUiConf!,
      data: { treeSelectedNode: nodeTreeData! },
    });
    subject.publish({
      topic: '/page/change',
      producerId: idUiConf!,
      data: 'form',
    });
  };

  const handleToEdit = () => {
    subject.publish({
      topic: 'toEdit',
      producerId: idUiConf!,
      data: { treeSelectedNode: nodeTreeData, selectedRow: selectRows[0] },
    });
    subject.publish({
      topic: '/page/change',
      producerId: idUiConf!,
      data: 'form',
    });
  };

  const handleRowsDelete = () => {
    setIsModalVisible(true);
  };

  const handleRowSelectType = () => {
    if (rowSelectionType !== 'checkbox') {
      subject.publish({
        topic: 'checkbox',
        producerId: idUiConf!,
        data: undefined,
      });
      dispatch(actions.setRowSelectionType('checkbox'));
      return;
    }
    subject.publish({
      topic: 'radio',
      producerId: idUiConf!,
      data: undefined,
    });
    dispatch(actions.setRowSelectionType('radio'));
  };

  const handleOk = () => {
    subject.publish({
      topic: 'deletes',
      producerId: idUiConf!,
      data: undefined,
    });
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleReflesh = () => {
    subject.publish({
      topic: 'reflesh',
      producerId: idUiConf!,
      data: undefined,
    });
  };
  const handleEnableChange = () => {
    subject.publish({
      topic: 'enabledChange',
      producerId: idUiConf!,
      data: undefined,
    });
  };
  const handleLiveChange = () => {
    subject.publish({
      topic: 'liveChange',
      producerId: idUiConf!,
      data: undefined,
    });
  };
  const handleSaveVideoChange = () => {
    subject.publish({
      topic: 'saveVideoChange',
      producerId: idUiConf!,
      data: undefined,
    });
  };
  const handlePlayAuthreFresh = () => {
    subject.publish({
      topic: 'playAuthCodeReset',
      producerId: idUiConf!,
      data: undefined,
    });
  };
  const getLiveInfo = () => {
    if (selectRows?.length !== 1) {
      console.error('no row selected or more than one row selected');
      return;
    }
    const camera: TCamera = selectRows[0];
    if (!camera.code || !camera.playAuthCode) {
      console.error('code or playAuthCode is empty');
      return;
    }
    const liveInfo: TLiveInfo = {
      method: 'permanent',
      code: camera.code,
      playAuthCode: camera.playAuthCode,
    };
    return liveInfo;
  };
  return (
    <>
      <div
        style={{
          display: 'flex',
          flex: '0 1 auto',
          gap: actionTableConf?.gap ?? '10px',
          justifyContent: actionTableConf?.justifyContent ?? 'start',
          flexWrap: 'wrap',
        }}
      >
        <Button
          key={'VxszMmoLcT-BbG5uOlvlB'}
          size={'middle'}
          type={'primary'}
          disabled={!nodeTreeData}
          onClick={handleToAdd}
        >
          {'新增'}
        </Button>
        <Button
          key={'75umlzBtNeO1we1f4fGiL'}
          size={'middle'}
          type={'primary'}
          disabled={selectRows?.length !== 1}
          onClick={handleToEdit}
        >
          {'编辑'}
        </Button>
        <Button
          key={'q4WpAggIqtpyzx7K6ViA8'}
          size={'middle'}
          type={'primary'}
          disabled={!nodeTreeData}
          hidden={rowSelectionType === 'radio'}
          onClick={handleRowSelectType}
        >
          {'单选'}
        </Button>
        <Button
          key={'OC0vViwCYiaEERQTq179i'}
          size={'middle'}
          type={'primary'}
          disabled={!nodeTreeData}
          hidden={rowSelectionType === 'checkbox'}
          onClick={handleRowSelectType}
        >
          {'多选'}
        </Button>
        <Button
          key={'r2_WZBzZpSEXzGRElvfSY'}
          size={'middle'}
          type={'primary'}
          disabled={selectRows?.length == 0}
          onClick={handleRowsDelete}
        >
          {'删除'}
        </Button>
        <Button
          key={'JNeTkXaIKMPFlmvlU6AAu'}
          size={'middle'}
          type={'primary'}
          disabled={selectRows?.length !== 1}
          onClick={handleEnableChange}
        >
          {selectRows?.length === 1 && selectRows[0]['enabled'] === false
            ? '启用'
            : '禁用'}
        </Button>
        <Button
          key={'V7R6RR65lw72LQR3FdVHA'}
          size={'middle'}
          type={'primary'}
          disabled={selectRows?.length !== 1}
          onClick={handleLiveChange}
        >
          {selectRows?.length === 1 && selectRows[0]['live'] === false
            ? '开启直播'
            : '停止直播'}
        </Button>
        <Button
          key={'XkClpAiIv6vvrpAY9aSw9'}
          size={'middle'}
          type={'primary'}
          disabled={selectRows?.length !== 1}
          onClick={handleSaveVideoChange}
        >
          {selectRows?.length === 1 && selectRows[0]['saveVideo'] === false
            ? '开启录像'
            : '停止录像'}
        </Button>
        <Button
          key={'2syLV9rH2NWsQ0KzdcpqI'}
          size={'middle'}
          type={'primary'}
          disabled={selectRows?.length !== 1}
          onClick={handlePlayAuthreFresh}
        >
          {'刷新播放权限码'}
        </Button>
        <Live disabled={selectRows?.length !== 1} getLiveInfo={getLiveInfo} />
      </div>
      <Modal
        title="删除确认"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>确定删除所选记录？</p>
      </Modal>
    </>
  );
};

export default SearchAreaComponent;

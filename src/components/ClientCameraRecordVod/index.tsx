import { FC, useEffect, useMemo } from 'react';
import React from 'react';
import { Button, Modal } from 'antd';
import Env from '@/conf/env';
import VodPlay from '../VodPlay';

const ClientCameraRecordVod: FC<{
  disabled: boolean;
  idClientInfo: string;
  idCameraRecord: string;
}> = ({ disabled, idClientInfo, idCameraRecord }) => {
  const [open, setOpen] = React.useState(false);

  const mediaUrlInfo = useMemo(() => {
    const mediaInfoGetUrl = `/clientCameraRecord/getMediaInfo/${idClientInfo}/${idCameraRecord}`;
    const mediaDataGetUrl = `${Env.directServerUrl}/clientCameraRecord/start/${idClientInfo}/${idCameraRecord}`;
    const playTimeNotifyUrl = `/clientCameraRecord/fetch/${idClientInfo}`;
    return { mediaInfoGetUrl, mediaDataGetUrl, playTimeNotifyUrl };
  }, [idCameraRecord]);

  useEffect(() => {}, []);

  const handleToPlay = async () => {
    setOpen(true);
  };

  const handlePlayClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        size={'middle'}
        type={'primary'}
        disabled={disabled}
        onClick={handleToPlay}
      >
        观看录像
      </Button>
      <Modal
        open={open}
        maskClosable={false}
        onCancel={handlePlayClose}
        destroyOnClose={true}
        width={window.innerWidth * 0.8}
        footer={''}
      >
        <VodPlay {...mediaUrlInfo} />
      </Modal>
    </>
  );
};
export default ClientCameraRecordVod;

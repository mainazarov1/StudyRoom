import { FC, useState } from 'react';
import { Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import DragUploadImg from '../../DragUploadImg/DragUploadImg';
import ModalComponents from '../../modal/Modal';

const ModalUploadImg: FC = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Button icon={<UploadOutlined />} onClick={showModal}>
        Загрузить фото
      </Button>
      <ModalComponents width={1000} title='Выбрать тему' open={open} onCancel={handleCancel}>
        <DragUploadImg />
      </ModalComponents>
    </>
  );
};

export default ModalUploadImg;

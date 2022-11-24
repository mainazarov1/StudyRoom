import {FC, useState } from 'react';
import { Button, Modal, Tabs } from 'antd';;
import { UploadOutlined } from '@ant-design/icons';
import DragUploadImg from '../../DragUploadImg/DragUploadImg';

const ModalUploadImg = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Button icon={<UploadOutlined />} onClick={showModal} >Загрузить фото</Button>
      <Modal
        width={1000}
        title='Выбрать тему'
        open={open}
        onCancel={handleCancel}
      >
        <DragUploadImg />
      </Modal>
    </>
  );
};

export default ModalUploadImg;
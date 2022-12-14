import { FC, useState } from 'react';
import { Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import DragUploadImg from '../../DragUploadImg/DragUploadImg';
import s from './ModalUploaadImg.module.scss';
import { AppModal } from '../../ModalApp';

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
      <Button icon={<UploadOutlined />} onClick={showModal} className={s.btn} >Загрузить фото</Button>
      <AppModal
        width={1000}
        title='Выбрать тему'
        open={open}
        onCancel={handleCancel}
      >
        <DragUploadImg />
      </AppModal>
    </>
  );
};

export default ModalUploadImg;

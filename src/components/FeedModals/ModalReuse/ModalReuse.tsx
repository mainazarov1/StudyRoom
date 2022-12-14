import { FC, useState } from 'react';
import { Modal, Button } from 'antd';
import { RetweetOutlined } from '@ant-design/icons';

import DataTaskList from '../../DataTaskList/DataTaskList';
import { AppModal } from '../../ModalApp';

import s from './ModalReuse.module.scss';

const ModalReuse:FC = () => {
  const [open, setOpen] = useState(false);
  
  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <RetweetOutlined 
        className={s.retween_icon} 
        onClick={(e) => {
          e.stopPropagation();
          showModal();
        }}
      />
      <AppModal
        width={800}
        className={s.modal}
        title={'Выберите курс'}
        open={open}
        onCancel={handleCancel}
        footer={[
          <Button 
            key='btn' 
            type="link" 
            style={{color: 'rgb(23,78,166)'}} 
            onClick={handleCancel}
          >
            Отмена
          </Button>,
          <Button 
            key='1' 
            type="link" 
            style={{color: 'rgb(23,78,166)'}} 
            onClick={handleCancel}
          >
            Сохранить
          </Button>,
        ]}
      >
        <DataTaskList />
      </AppModal>
    </>
  );
};

export default ModalReuse;
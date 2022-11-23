import { FC, useState } from 'react';
import { Modal, Button } from 'antd';
import s from './ModalReuse.module.scss';
import { RetweetOutlined } from '@ant-design/icons';
import DataTaskList from '../../DataTaskList/DataTaskList';

interface IProps {
  title?: string,
}

const ModalReuse:FC<IProps> = ({ title }) => {
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
        onClick={showModal}
      />
      <Modal
        width={800}
        className={s.modal}
        title={`Выберите курс`}
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
      </Modal>
    </>
  );
};

export default ModalReuse;
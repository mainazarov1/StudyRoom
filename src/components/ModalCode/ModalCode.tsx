import { Button, Modal, Tooltip, message } from 'antd';
import { useState, FC } from 'react';
import { ExpandOutlined, CopyOutlined } from '@ant-design/icons';

import s from './ModalCode.module.scss'; 

const ModalCode:FC = () => {
  const [open, setOpen] = useState(false);
  const [ code, setCode] = useState('tq7kdvd');

  const info = () => {
    message.info('Ссылка скопирована ');
  };

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip key='tooltip' placement="bottom" title='Показать'>
        <ExpandOutlined onClick={showModal} className={s.bottom_block_icon} />
      </Tooltip>
      <Modal
        className={s.modal}
        open={open}
        onCancel={handleCancel}
        footer={[
          <span key='name' className={s.name} >name</span>,
          <Button 
            key='btn' 
            type="link" 
            style={{color: 'rgb(23,78,166)'}} 
            icon={<CopyOutlined style={{color: 'rgb(23,78,166)'}} />} 
            onClick={() => {
              navigator.clipboard.writeText(code);
              info();
            }}
          >
            Копировать Сcылку
          </Button>,
          <Tooltip key='tooltip' placement="bottom" title='Полный экран'>
            <ExpandOutlined className={s.bottom_block_icon} />
          </Tooltip>, 
        ]}
      >
        <div className={s.modal_content}>{code}</div>
      </Modal>
    </>
  );
};

export default ModalCode;

import { Button, Tooltip, message } from 'antd';
import { useState, FC } from 'react';
import { ExpandOutlined, CopyOutlined, CloseOutlined, CompressOutlined } from '@ant-design/icons';

import FullScreenModal from '../../../containers/FullScreenModal/FullScreenModal';
import ModalComponents from '../../modal/Modal';

import s from './ModalCode.module.scss';

const ModalCode: FC = () => {
  const [open, setOpen] = useState(false);
  const [fullScreenModal, setFullScreenModal] = useState(false);
  const code = 'tq7kdvd';

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
      <Tooltip key='tooltip' placement='bottom' title='Показать'>
        <ExpandOutlined onClick={showModal} className={s.bottom_block_icon} />
      </Tooltip>
      <ModalComponents
        className={s.modal}
        open={open}
        onCancel={handleCancel}
        centered={true}
        footer={[
          <span key='name' className={s.name}>
            name
          </span>,
          <Button
            key='btn'
            type='link'
            style={{ color: 'rgb(23,78,166)' }}
            icon={<CopyOutlined style={{ color: 'rgb(23,78,166)' }} />}
            onClick={() => {
              navigator.clipboard.writeText(code);
              info();
            }}
          >
            Копировать Сcылку
          </Button>,
          <Tooltip key='tooltip' placement='bottom' title='Полный экран'>
            <ExpandOutlined
              className={s.bottom_block_icon}
              onClick={() => setFullScreenModal(true)}
            />
          </Tooltip>,
        ]}
      >
        <div className={s.modal_content}>{code}</div>
      </ModalComponents>
      <FullScreenModal
        open={fullScreenModal}
        title={<CloseOutlined onClick={() => setFullScreenModal(false)} />}
        closebtn={<span></span>}
      >
        <div className={s.fullscreen_code}>{code}</div>
        <hr className={s.fullscreen_line} />
        <div className={s.fullscreen_footer}>
          <span className={s.fullscreen_name}>StudyRoom</span>
          <div>
            <Button
              key='btn'
              type='link'
              style={{ color: 'rgb(23,78,166)' }}
              icon={<CopyOutlined style={{ color: 'rgb(23,78,166)' }} />}
              onClick={() => {
                navigator.clipboard.writeText(code);
                info();
              }}
            >
              Копировать Сcылку
            </Button>
            <CompressOutlined
              className={s.bottom_block_icon}
              onClick={() => setFullScreenModal(false)}
            />
          </div>
        </div>
      </FullScreenModal>
    </>
  );
};

export default ModalCode;

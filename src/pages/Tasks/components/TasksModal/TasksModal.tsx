import { CloseOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import React, { FC, ReactNode, useState } from 'react';
import { InputApp } from '../../../../components/InputApp/InputApp';
import FullScreenModal from '../../../../containers/FullScreenModal/FullScreenModal';
import style from './tasksModal.module.scss';

interface TasksModapProps {
  open: boolean;
  handleClose(): void;
}

const { TextArea } = Input;

const TasksModal: FC<TasksModapProps> = ({ open, handleClose }) => {
  const [value, setValue] = useState<string>();
  return (
    <FullScreenModal
      title={
        <span>
          <CloseOutlined /> Вопрос
        </span>
      }
      open={open}
      closebtn={
        <Button onClick={handleClose} style={{ marginRight: '24px' }}>
          Сохранить
        </Button>
      }
    >
      <div className={style.modal__content}>
        <div className={style.content__wrap}>
          <InputApp placeholder='Название' />
          <TextArea
            className={style.modal__input}
            placeholder='Инструкции(необязательно)'
            onChange={(e) => setValue(e.target.value)}
            autoSize={true}
          />
        </div>
        <div className={style.content__wrap}></div>
      </div>
      <div className={style.modal__side}></div>
    </FullScreenModal>
  );
};

export default TasksModal;

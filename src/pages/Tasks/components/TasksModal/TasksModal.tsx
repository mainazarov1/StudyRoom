import { CloseOutlined } from '@ant-design/icons';
import { Button, Checkbox, Input, Select, Typography } from 'antd';
import React, { FC, ReactNode, useState } from 'react';
import { InputApp } from '../../../../components/InputApp/InputApp';
import FullScreenModal from '../../../../containers/FullScreenModal/FullScreenModal';
import style from './tasksModal.module.scss';

interface TasksModapProps {
  open: boolean;
  handleClose(): void;
  id: string;
  title: string;
  htmlContent: string;
}
const { Paragraph } = Typography;

const { TextArea } = Input;

const TasksModal: FC<TasksModapProps> = ({ open, handleClose, id, title, htmlContent }) => {
  const [value, setValue] = useState<string>();
  return (
    <FullScreenModal
      title={
        <span>
          <CloseOutlined onClick={handleClose} /> Вопрос
        </span>
      }
      open={open}
      closebtn={
        <Button onClick={handleClose} style={{ marginRight: '24px' }}>
          Сохранить
        </Button>
      }
      bodyStyle={{
        alignItems: 'stretch',
        flexDirection: 'row',
        minHeight: `calc(100vh - 55px)`,
        display: 'flex',
        padding: 0,
        flexGrow: 1,
      }}
    >
      <div className={style.modal__mainContent}>
        <div className={style.modal__content}>
          <InputApp placeholder='Название' defaultValue={title} />
          <TextArea
            className={style.modal__input}
            placeholder='Инструкции(необязательно)'
            onChange={(e) => setValue(e.target.value)}
            autoSize={true}
            style={{ minHeight: '176px' }}
            defaultValue={htmlContent}
          />
        </div>
      </div>
      <div className={style.modal__side}>
        <Paragraph className={style.modal__side__name}>Для кого</Paragraph>
          <Select/>
      </div>
    </FullScreenModal>
  );
};

export default TasksModal;

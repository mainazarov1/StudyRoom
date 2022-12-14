import { Button, Modal, Form, Typography, Divider } from 'antd';
import React, { useState } from 'react';

import { InputApp } from '../../components/InputApp/InputApp';
import { InputAppPass } from '../../components/InputApp/InputAppPass';

import s from './CourseAdditionForm.module.scss';

interface IPrps {
  isChecked: boolean;
  closeModal: () => void;
}

const CourseAdditionForm: React.FC<IPrps> = ({ isChecked, closeModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { Title } = Typography;

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        type='link'
        disabled={!isChecked}
        onClick={() => {
          closeModal();
          showModal();
        }}
      >
        Продолжить
      </Button>
      <Modal
        title='Создать курс'
        className={s.modal}
        open={isModalOpen}
        centered={true}
        width={500}
        closable={false}
        footer={[
          <Button type='link' onClick={handleCancel}>
            Назад
          </Button>,
          <Button type='link' onClick={handleCancel}>
            Создать
          </Button>,
        ]}
      >
        <Form layout='vertical' className={s.authForm}>
          <InputApp placeholder='Название курся (Объязательно)' name='Название' required={true} />
          <InputApp placeholder='Раздел' name='Раздел' />
          <InputApp placeholder='Предмет' name='Предмет' />
          <InputApp placeholder='Аудитория' name='Аудитория' />
        </Form>
      </Modal>
    </>
  );
};

export default CourseAdditionForm;

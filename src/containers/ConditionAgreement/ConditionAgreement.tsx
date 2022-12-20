import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Checkbox, { type CheckboxChangeEvent } from 'antd/es/checkbox';

import CourseAdditionForm from '../CourseAdditionForm/CourseAdditionForm';

import s from './ConditionAgreement.module.scss';
import { AppModal } from '../../components/ModalApp';

const style = {
  borderRadius: 5,
  backgroundColor: '#0000000f',
  width: '100%',
  padding: '16px 24px',
  alignItems: 'center',
  gap: 12,
};

const ConditionAgreement: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChange = (e: CheckboxChangeEvent) => {
    setIsChecked(e.target.checked);
  };

  return (
    <>
      <span onClick={showModal}>создать курс</span>
      <AppModal
        title='Используете Класс в учебном заведении?'
        className={s.modal}
        open={isModalOpen}
        centered={true}
        width={500}
        closable={false}
        footer={[
          <Button key={0} type='link' onClick={handleCancel}>
            Назад
          </Button>,
          <CourseAdditionForm key={1} isChecked={isChecked} closeModal={handleCancel} />,
        ]}
      >
        <p>
          Чтобы работать с Google Классом, необходимо создать бесплатный аккаунт
          <a href='https://edu.google.com/intl/ru/workspace-for-education/editions/education-fundamentals/#how-to'>
            Google Workspace for Education
          </a>
          для вашего учебного заведения.
          <a href='https://support.google.com/edu/classroom/answer/6025224?hl=ru&authuser=0'>
            {' '}
            Подробнее…
          </a>
        </p>
        <p>
          Google Workspace for Education позволяет администраторам выбрать, какие сервисы Google
          будут доступны учащимся, а также обеспечивает дополнительную{' '}
          <a href='https://edu.google.com/intl/ru/why-google/privacy-security/'>
            конфиденциальность и безопасность
          </a>{' '}
          данных. Учащиеся на территории учебного заведения не смогут входить в сервис "Google
          Класс" с помощью обычного аккаунта.
        </p>
        <Checkbox onChange={onChange} style={style}>
          Мне все понятно, и я не использую <br /> Класс в учебном заведении
        </Checkbox>
      </AppModal>
    </>
  );
};
export default ConditionAgreement;

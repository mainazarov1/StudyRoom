import { Modal, ModalProps } from 'antd';
import classNames from 'classnames';
import React, { useState } from 'react';

import s from './FullScreenModal.module.scss';

interface Iprops extends ModalProps {
  title: React.ReactNode;
  closebtn: React.ReactNode;
  open: boolean;
  children: React.ReactNode;
  classNameProp?: string;
}

const FullScreenModal: React.FC<Iprops> = ({ title, closebtn, open, children, classNameProp, ...settings }) => {
  return (
    <>
      <Modal
        title={title}
        className={classNames(classNameProp, s.modal)}
        closeIcon={closebtn}
        open={open}
        width={'100vw'}
        footer={null}
        bodyStyle={{
          minHeight: 'calc(100vh - 55px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 16,
          gap: 16,
        }}
        {...settings}
      >
        {children}
      </Modal>
    </>
  );
};

export default FullScreenModal;
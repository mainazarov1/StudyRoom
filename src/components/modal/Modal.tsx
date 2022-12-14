import React, { FC } from 'react';
import { Modal} from 'antd';

interface ModalFuncProps {
  children?: React.ReactNode;
  className?: string
  open?: boolean;
  onCancel?: () => void;
  centered?: boolean;
  footer?: any[];
  width?: number;
  title?: string;
  closable?: boolean;
}

const ModalComponents:FC<ModalFuncProps> = (props) => {
  return (
    <Modal {...props} >
      {props.children}
    </Modal>
  );
};

export default ModalComponents;
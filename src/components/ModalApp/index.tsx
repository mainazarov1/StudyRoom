import { Modal, ModalProps } from 'antd';

export const AppModal = ({ children, ...props }: ModalProps) => {
  return (
    <Modal {...props}>
      <div style={{ padding: 2 }}>{children}</div>
    </Modal>
  );
};

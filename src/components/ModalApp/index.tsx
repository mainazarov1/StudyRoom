import { Modal } from 'antd';

// eslint-disable-next-line no-duplicate-imports
import type { ModalProps } from 'antd';

export const AppModal = ({ children, ...props }: ModalProps) => {
  return (
    <Modal {...props}>
      <div style={{ padding: 2 }}>{children}</div>
    </Modal>
  );
};

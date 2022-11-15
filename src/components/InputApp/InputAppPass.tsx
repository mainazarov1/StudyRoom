import { Form, Input } from 'antd';

import styles from './InputApp.module.scss';
interface IInputAppPassProps {
  label: string;
  name: string;
  placeholder: string;
}
export const InputAppPass = ({ label, name, placeholder }: IInputAppPassProps) => {
  return (
    <Form.Item className={styles.inputAppLabel} label={label} name={name}>
      <Input.Password className={styles.inputAppPass} placeholder={placeholder} />
    </Form.Item>
  );
};

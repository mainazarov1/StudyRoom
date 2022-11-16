import { Form, Input } from 'antd';

import styles from './InputApp.module.scss';
interface IInputAppPassProps {
  label?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
}
export const InputAppPass = ({ label, name, placeholder, required }: IInputAppPassProps) => {
  return (
    <Form.Item className={styles.inputAppLabel} label={label} name={name} required={required}>
      <Input.Password
        className={styles.inputAppPass}
        placeholder={placeholder}
        autoComplete='off'
      />
    </Form.Item>
  );
};

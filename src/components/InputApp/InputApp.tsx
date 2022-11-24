import { Form, Input } from 'antd';

import styles from './InputApp.module.scss';
interface IInputAppProps {
  label?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
}
export const InputApp = ({ label, name, placeholder, required }: IInputAppProps) => {
  return (
    <Form.Item required={required} className={styles.inputAppLabel} label={label} name={name} >
      <Input className={styles.inputApp} placeholder={placeholder} autoComplete='off' />
    </Form.Item>
  );
};

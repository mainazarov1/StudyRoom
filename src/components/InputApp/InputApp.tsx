import { Form, Input } from 'antd';

import styles from './InputApp.module.scss';
interface IInputAppProps {
  label: string;
  name: string;
  placeholder: string;
}
export const InputApp = ({ label, name, placeholder }: IInputAppProps) => {
  return (
    <Form.Item className={styles.inputAppLabel} label={label} name={name}>
      <Input className={styles.inputApp} placeholder={placeholder} autoComplete='off' />
    </Form.Item>
  );
};

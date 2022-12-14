import { Form, Input } from 'antd';

import styles from './InputApp.module.scss';

import type { InputProps } from 'antd';

interface IInputAppProps extends InputProps {
  label?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
}
export const InputApp = ({ label, name, placeholder, required, ...settings }: IInputAppProps) => {
  return (
    <Form.Item required={required} className={styles.inputAppLabel} label={label} name={name}>
      <Input
        className={styles.inputApp}
        placeholder={placeholder}
        autoComplete='off'
        {...settings}
      />
    </Form.Item>
  );
};

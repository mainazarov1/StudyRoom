import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Form, Menu, Space, Typography } from 'antd';
import { FC, ReactNode, useState } from 'react';

import s from './appDropdown.module.scss';

const { Paragraph } = Typography;

interface IAppDropdownProps {
  inputTitle?: string | [string, string] | undefined | null
  title?: string | [string, string];
  children: ReactNode;
  width?: string;
}

const AppDropdown: FC<IAppDropdownProps> = ({
  inputTitle,
  title,
  children,
  width,
}) => {
  const [studentDropOpen, setStudentDropOpen] = useState<boolean>(false);
  const menuStudent = (
    <Menu style={{ width: `${width}` }} className={s.modal__menu}>
      {children}
    </Menu>
  );

  return (
    <>
      <Paragraph className={s.modal__name}>{title}</Paragraph>
      <Dropdown
        overlay={menuStudent}
        trigger={['click']}
        open={studentDropOpen}
        onOpenChange={() => setStudentDropOpen(!studentDropOpen)}
        className={s.course_list}
      >
        <Form.Item >
          <Space>
            {inputTitle}
            <DownOutlined />
          </Space>
        </Form.Item>
      </Dropdown>
    </>
  );
};

export default AppDropdown;

import { CloseOutlined, TeamOutlined } from '@ant-design/icons';
import { Avatar, Button, Checkbox, Dropdown, Input, Select, Space } from 'antd';
import { Option } from 'antd/lib/mentions';
import MenuItem from 'antd/lib/menu/MenuItem';
import React, { FC, useState } from 'react';
import AppDropdown from '../../../../components/AppDropdown/AppDropdown';
import { InputApp } from '../../../../components/InputApp/InputApp';
import { Tiptap } from '../../../../components/TextArea/TextAreaComponent';
import FullScreenModal from '../../../../containers/FullScreenModal/FullScreenModal';
import style from './tasksModal.module.scss';

interface TasksModapProps {
  open: boolean;
  handleClose(): void;
  id: string;
  title: string;
  htmlContent: string;
}

const { TextArea } = Input;

const TasksModal: FC<TasksModapProps> = ({ open, handleClose, id, title, htmlContent }) => {
  const [textareaValue, setTextareaValue] = useState<string>();
  const [balls, setBalls] = useState(50);
  const onChange = (checkedValues: any) => {
    console.log(checkedValues, 'onchange');
  };
  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  };
  const students = (
    <>
      <MenuItem className={style.modal__menuItem} style={{ cursor: 'pointer' }}>
        <Checkbox className={style.modal__checkbox}>
          <Space size={'middle'} style={{ height: '3.5rem' }} align='center'>
            <Avatar style={{ backgroundColor: '#1890ff' }} icon={<TeamOutlined />} />
            Все учащиеся
          </Space>
        </Checkbox>
      </MenuItem>
      <MenuItem className={style.modal__menuItem} onClick={onChange} style={{ cursor: 'pointer' }}>
        <Checkbox className={style.modal__checkbox}>
          <Space size={'middle'} style={{ height: '2.5rem' }} align='center'>
            <Avatar style={{ backgroundColor: '#1890ff' }} icon={<TeamOutlined />} />
            Sergey
          </Space>
        </Checkbox>
      </MenuItem>
      <MenuItem className={style.modal__menuItem} onClick={onChange} style={{ cursor: 'pointer' }}>
        <Checkbox className={style.modal__checkbox}>
          <Space size={'middle'} style={{ height: '3.5rem' }} align='center'>
            <Avatar style={{ backgroundColor: '#1890ff' }} icon={<TeamOutlined />} />
            Andrey
          </Space>
        </Checkbox>
      </MenuItem>
    </>
  );

  const handleBallsClick = (e: any) => {
    console.log(e);
  };

  const items = [{ label: <span onClick={handleBallsClick}>Без оценок</span>, key: 'item-1' }];

  return (
    <FullScreenModal
      title={
        <span>
          <CloseOutlined onClick={handleClose} /> Вопрос
        </span>
      }
      open={open}
      closebtn={
        <Button onClick={handleClose} style={{ marginRight: '24px' }}>
          Сохранить
        </Button>
      }
      bodyStyle={{
        alignItems: 'stretch',
        flexDirection: 'row',
        minHeight: `calc(100vh - 55px)`,
        display: 'flex',
        padding: 0,
        flexGrow: 1,
      }}
    >
      <div className={style.modal__mainContent}>
        <div className={style.modal__content}>
          <InputApp placeholder='Название' defaultValue={title} />
          <Tiptap content={htmlContent} setStateShow={setTextareaValue} />
        </div>
      </div>

      <div className={style.modal__side}>
        <AppDropdown children={students} title='Все учащиеся' width='256px' />
        <div style={{ display: 'flex', columnGap: '5px' }}>
          <div style={{ width: '256px' }}>
            <p className={style.modal__name}>Категория оценок</p>
            <Select
              onChange={handleChange}
              bordered={false}
              className={style.modal__list}
              style={{ width: '100%', padding: '7px' }}
              defaultValue={{ value: '0', label: 'Без категории' }}
              options={[
                {
                  value: 'jack',
                  label: 'Jack',
                },
                {
                  value: 'lucy',
                  label: 'Lucy',
                },
                {
                  value: 'Yiminghe',
                  label: 'yiminghe',
                },
              ]}
            />
          </div>
          <div style={{ width: '256px' }}>
            <p className={style.modal__name}>Баллы</p>
            <Select
              bordered={false}
              onChange={handleChange}
              className={style.modal__list}
              style={{ width: '100%', padding: '7px' }}
              defaultValue={{ value: '0', label: 'Без оценки' }}
              options={[
                {
                  value: 'Abbiejack',
                  label: 'Abbiejack',
                },
                {
                  value: 'Blanchelucy',
                  label: 'Blanchelucy',
                },
                {
                  value: 'CodyYiminghe',
                  label: 'CodyYiminghe',
                },
              ]}
            />
            <Dropdown menu={{ items }}>
              <InputApp value={balls === 0 ? 'Без оценки' : balls} />
            </Dropdown>
          </div>
        </div>
      </div>
    </FullScreenModal>
  );
};

export default TasksModal;

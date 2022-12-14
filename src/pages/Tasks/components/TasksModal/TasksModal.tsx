import { CaretDownOutlined, CloseOutlined, QuestionCircleTwoTone, TeamOutlined, } from '@ant-design/icons';
// eslint-disable-next-line import/named
import {
  Avatar,
  Button,
  Checkbox,
  DatePicker,
  DatePickerProps,
  Divider,
  Dropdown,
  MenuProps,
  Select,
  Space,
} from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import React, { ChangeEvent, FC, MouseEvent, useState } from 'react';

import AppDropdown from '../../../../components/AppDropdown/AppDropdown';
import { InputApp } from '../../../../components/InputApp/InputApp';
import { Tiptap } from '../../../../components/TextArea/TextAreaComponent';
import FullScreenModal from '../../../../containers/FullScreenModal/FullScreenModal';

import style from './tasksModal.module.scss';

interface ITasksModalProps {
  open: boolean;

  handleClose(): void;

  id: string;
  title: string;
  htmlContent: string;
  isModalEdit?: boolean;
}

const TasksModal: FC<ITasksModalProps> = ({
  open,
  handleClose,
  title,
  htmlContent,
  isModalEdit,
}) => {
  const [textareaValue, setTextareaValue] = useState<string>();
  const [balls, setBalls] = useState<number | string>(0);
  const [date, setDate] = useState<string | [string, string]>();

  const onChange = (checkedValues: object) => {
    console.log(checkedValues, 'onchange');
    console.log(textareaValue);
  };
  const students = (
    <>
      <MenuItem className={style.modal__menuItem} style={{ cursor: 'pointer' }}>
        <Checkbox className={style.modal__checkbox}>
          <Space size={'middle'} style={{ height: '3.5rem' }} align="center">
            <Avatar style={{ backgroundColor: '#1890ff' }} icon={<TeamOutlined />} />
            Все учащиеся
          </Space>
        </Checkbox>
      </MenuItem>
      <MenuItem className={style.modal__menuItem} onClick={onChange} style={{ cursor: 'pointer' }}>
        <Checkbox className={style.modal__checkbox}>
          <Space size={'middle'} style={{ height: '2.5rem' }} align="center">
            <Avatar style={{ backgroundColor: '#1890ff' }} icon={<TeamOutlined />} />
            Sergey
          </Space>
        </Checkbox>
      </MenuItem>
      <MenuItem className={style.modal__menuItem} onClick={onChange} style={{ cursor: 'pointer' }}>
        <Checkbox className={style.modal__checkbox}>
          <Space size={'middle'} style={{ height: '3.5rem' }} align="center">
            <Avatar style={{ backgroundColor: '#1890ff' }} icon={<TeamOutlined />} />
            Andrey
          </Space>
        </Checkbox>
      </MenuItem>
    </>
  );

  const handleBallsInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBalls(e.target.value);
  };

  const handleSetCategory = (value: string) => {
    if (+value !== 0) {
      setBalls(value);
    }
  };

  const handleSetDate = (
    value: DatePickerProps['value'],
    dateString: [string, string] | string,
  ) => {
    setDate(dateString);
  };

  const setBallsToDefault = (e: MouseEvent<HTMLSpanElement>) => {
    setBalls(e.currentTarget.innerText);
  };

  const items = [
    { label: <span onClick={(e) => setBallsToDefault(e)}>Без оценки</span>, key: 'item-1' },
  ];
  const itemstwo: { label: JSX.Element; value: string }[] = [
    { label: <span>Без категории</span>, value: '0' },
    {
      label: <span>Эссе</span>,
      value: '100',
    },
  ];
  const itemToTakeDate = [
    {
      label: (
        <DatePicker onChange={handleSetDate} showTime style={{ width: '100%' }} bordered={false} />
      ),
    },
  ];
  const aw: MenuProps['items'] = [
    {
      label: (
        <span>
          Без темы
        </span>
      ),
      key: '0',
    },
    {
      label: (
        <span>
          Создать тему
        </span>
      ),
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: (
        <span>
          Теги
        </span>
      ),
      key: '3',
    },
  ];

  const onMenuClick: MenuProps['onClick'] = (e) => {
    console.log('click', e);
  };

  const lo = true;

  const saveButtonItems = [
    {
      key: '1',
      label: 'Создать задание',
    },
    {
      key: '2',
      label: 'Добавить в расписание',
    },
    {
      key: '3',
      label: 'Сохранить в черновик',
    },
    {
      type: 'divider',
      key: '2323',
    },
    {
      key: '4',
      label: 'Удалить черновик',
    },
  ];

  return (
    <FullScreenModal
      title={
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <CloseOutlined onClick={handleClose} />
          <QuestionCircleTwoTone
            twoToneColor="rgb(30,142,62)"
            style={{ marginLeft: '10px', fontSize: '20px' }}
          />
          <span
            style={{
              lineHeight: '1.75rem',
              fontSize: '1.375rem',
              letterSpacing: 0,
              fontWeight: 400,
              color: ' rgb(95,99,104)',
              minWidth: 0,
              padding: '0.25rem',
              paddingLeft: '0.5rem',
            }}
          >
            Вопрос
          </span>
        </span>
      }
      open={open}
      closebtn={
        lo ? (
          <Dropdown.Button
            className={style.modal__saveButton}
            icon={<CaretDownOutlined />}
            menu={{ items: saveButtonItems, onClick: onMenuClick }}
          >
            Создать задание
          </Dropdown.Button>
        ) : (
          <Button
            onClick={handleClose}
            style={{
              marginRight: '24px',
              backgroundColor: 'rgb(19,115,51)',
              color: '#fff',
              borderRadius: '4px',
            }}
          >
            Сохранить
          </Button>
        )
      }
      bodyStyle={{
        alignItems: 'stretch',
        flexDirection: 'row',
        minHeight: 'calc(100vh - 55px)',
        display: 'flex',
        padding: 0,
        flexGrow: 1,
      }}
    >
      <div className={style.modal__mainContent}>
        <div className={style.modal__content}>
          <InputApp placeholder="Название" defaultValue={title} />
          <Tiptap content={htmlContent} setStateShow={setTextareaValue} />
        </div>
      </div>
      <div className={style.modal__side}>
        {/* eslint-disable-next-line react/no-children-prop */}
        <AppDropdown children={students} title="Все учащиеся" width="256px" />
        <div style={{ display: 'flex', columnGap: '5px' }}>
          <div style={{ width: '256px' }}>
            <p className={style.modal__name}>Категория оценок</p>
            <Select
              className={style.modal__select}
              defaultValue="Без категории"
              onChange={handleSetCategory}
              style={{
                width: 143,
                height: 46,
              }}
              options={itemstwo}
            />
          </div>
          <div style={{ width: '256px' }}>
            <p className={style.modal__name}>Баллы</p>
            <Dropdown
              className={style.modal__dropdown}
              overlayStyle={{
                display: balls === 'Без оценки' ? 'none' : undefined,
              }}
              menu={{ items }}
            >
              <InputApp value={balls} onChange={handleBallsInputChange} />
            </Dropdown>
          </div>
        </div>
        <div>
          <p className={style.modal__name}>Срок сдачи</p>
          <Select
            className={style.modal__select}
            placeholder="Срок сдачи не задан"
            value={date !== '' ? date : 'Срок сдачи не задан'}
            style={{
              width: '16.25rem',
              height: 46,
            }}
            options={itemToTakeDate}
            dropdownRender={(menu) => (
              <>
                <div
                  style={{ padding: '1rem 1.5rem', boxSizing: 'border-box', fontSize: '0.9375rem' }}
                >
                  Срок сдачи
                </div>
                <Divider style={{ margin: 0 }} />
                {menu}
              </>
            )}
          />
        </div>
        <div>
          <p className={style.modal__name}>Тема</p>
          <Dropdown
            menu={{ items: aw }}
            className={style.modal__select}
            trigger={['click']}
            overlayStyle={{
              width: '16.25rem',
              height: 46,
            }}
          >
            <Space>
              Hover me
            </Space>
          </Dropdown>
        </div>
      </div>
    </FullScreenModal>
  );
};

export default TasksModal;


// <Dropdown
//   className={style.modal__select}
//   style={{
//     width: '16.25rem',
//     height: 46,
//   }}
//   menu={{items: aw}}
// >
//   нажми на меня
// </Dropdown>
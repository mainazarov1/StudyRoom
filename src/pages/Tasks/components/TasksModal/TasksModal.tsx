import { CaretDownOutlined, CloseOutlined, QuestionCircleTwoTone, TeamOutlined, } from '@ant-design/icons';
import { Avatar, Button, Checkbox, DatePicker, DatePickerProps, Dropdown, Input, MenuProps, Select, Space, } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import React, { ChangeEvent, FC, MouseEvent, useState } from 'react';
import TextArea from 'antd/lib/input/TextArea';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

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
  const [date, setDate] = useState<string | [string, string]>('');
  const [theme, setTheme] = useState<string>('Без темы');
  const [cursor, setCursor] = useState<string>('pointer');
  const [visible, setVisible] = useState(false);
  const handleVisibleChange = (flag: any) => setVisible(flag);

  const onChange = (checkedValues: object) => {
    console.log(checkedValues, 'onchange');
    console.log(textareaValue);
  };

  const onOk = (value: DatePickerProps['value']) => {
    const currentDate = dayjs(value?.toString());
    dayjs.locale('ru');
    const formattedDate = currentDate.format('DD MMMM YYYY Z');
    setDate(formattedDate)
  }

  const datePickItems = (
    <>
      <MenuItem>
        <DatePicker placeholder='Срок сдачи не задан' format="YYYY-MM-DD HH:mm" showTime onOk={onOk} />
      </MenuItem>
    </>
  )
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

  const themeDropdownItems: MenuProps['items'] = [
    {
      label: (
        <span>
          Без темы
        </span>
      ),
      key: 'Без темы',
    },
    {
      label: (
        <span>
          Создать тему
        </span>
      ),
      key: 'Создать тему',
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
      key: 'Теги',
    },
  ];
  const onClick: MenuProps['onClick'] = ({ key }) => {
    if (key === 'Создать тему') {
      setCursor('auto');
    } else {
      setCursor('pointer');
    }
    setTheme(key);
  };

  const onMenuClick: MenuProps['onClick'] = (e) => {
    console.log('click', e);
  };

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

  const lo = true;

  const handleSubmit = (values: any) => {
    console.log(values)
  }

  return (
    <FullScreenModal
      classNameProp={style.modal__taskModal}
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
            style={{ margin: '18px 24px 0px 0px' }}
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
        flexDirection: 'row',
        minHeight: 'calc(100vh - 55px)',
        display: 'flex',
        padding: 0,
        flexGrow: 1,
      }}
    >
      <form style={{ display: 'flex', justifyContent: 'space-between' }} action="" onSubmit={handleSubmit}>
        <span style={{ width: '0' }}></span>
        <div style={{ width: '63rem' }} className={style.modal__mainContent}>
          <div className={style.modal__content}>
            <TextArea
              className={style.modal__mainContent__textarea}
              placeholder="Название"
              autoSize
              defaultValue={title ? title : ''}
            />
            <Tiptap content={htmlContent} setStateShow={setTextareaValue} />
          </div>
        </div>
        <div style={{}} className={style.modal__side}>
          <AppDropdown children={students} inputTitle="Все учащиеся" title="Все учащиеся" width="256px" />
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
          <div className={style.modal__list}>
            <p className={style.modal__name}>Срок сдачи</p>
            {/* <Select
            mode="tags"
            className={style.modal__select}
            placeholder="Срок сдачи не задан"
            value={date !== 'Срок сдачи не задан' ? date : 'Срок сдачи не задан'}
            showSearch={false}
            style={{
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
          /> */}
            <AppDropdown inputTitle={date ? date : 'Срок сдачи не задан'} children={datePickItems} width="100%" />
          </div>
          <div className={style.modal__list}>
            <p className={style.modal__name}>Тема</p>
            <Dropdown
              menu={{ items: themeDropdownItems, onClick }}
              className={style.modal__select}
              trigger={['click']}
              overlayStyle={{
                display: theme === 'Создать тему' ? 'none' : undefined,
                width: '16.25rem',
                height: 46,
              }}
            >
              <span style={{ cursor }}>
                {theme === 'Создать тему' ?
                  <Input
                    autoFocus
                    suffix={<CloseOutlined style={{ fontSize: '18px' }} onClick={() => setTheme('Без темы')} />}
                  /> : <Space>{theme}</Space>}
              </span>
            </Dropdown>
          </div>
          <div className={style.modal__list}>
            <div>
              <Checkbox>Учащиеся могут комментировать ответы друг друга</Checkbox>
            </div>
            <div>
              <Checkbox>Учащиеся могут редактировать ответы</Checkbox>
            </div>
          </div>
        </div>
      </form>
    </FullScreenModal>
  );
};

export default TasksModal;


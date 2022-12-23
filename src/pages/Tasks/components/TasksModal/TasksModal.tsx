import { CaretDownOutlined, CloseOutlined, QuestionCircleTwoTone, TeamOutlined, } from '@ant-design/icons';
import { Avatar, Button, Checkbox, DatePicker, DatePickerProps, Dropdown, Form, Input, MenuProps, Select, Space, } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import { ChangeEvent, FC, MouseEvent, useState } from 'react';
import TextArea from 'antd/lib/input/TextArea';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

import AppDropdown from '../../../../components/AppDropdown/AppDropdown';
import { InputApp } from '../../../../components/InputApp/InputApp';
import { Tiptap } from '../../../../components/TextArea/TextAreaComponent';
import FullScreenModal from '../../../../containers/FullScreenModal/FullScreenModal';


import style from './tasksModal.module.scss';
import { TaskApi } from '../../../../core/types/types';
import { observer } from 'mobx-react';
import { tasksStore } from '../../../../core/store/tasks';

interface ITasksModalProps {
  open: boolean;
  handleClose(): void;
  isModalEdit?: boolean;
  task: TaskApi
}

const TasksModalComponent: FC<ITasksModalProps> = ({
  open,
  handleClose,
  task,
  isModalEdit,
}) => {
  const [textareaValue, setTextareaValue] = useState<string>();
  const [balls, setBalls] = useState<number | string>(0);
  const [date, setDate] = useState<string | [string, string]>('');
  const [theme, setTheme] = useState<string>('Без темы');
  const [cursor, setCursor] = useState<string>('pointer');
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

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

  const handleBallsInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBalls(e.target.value);
  };

  const handleSetCategory = (value: string) => {
    if (+value !== 0) {
      form.setFieldsValue({
        note: value,
      });
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

  function handleSubmit(values: any) {
    console.log(values);
  }

  return (
    <FullScreenModal
      classNameProp={style.modal__taskModal}
      title={
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <CloseOutlined onClick={handleClose} />
          <QuestionCircleTwoTone
            twoToneColor='rgb(30,142,62)'
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
        false
          ? (
            <div className={style.modal__dropdownButton}>
              <Dropdown.Button
                htmlType='submit'
                trigger={['click']}
                type='text'
                icon={<CaretDownOutlined style={{ color: '#fff' }} />}
                menu={{ items: saveButtonItems, onClick: onMenuClick }}
              >
                Создать задание
              </Dropdown.Button>
            </div>
          ) : (
            <div className={style.modal__saveButton}>
              <Button
                htmlType='submit'
                form='test'
                onClick={handleSubmit}
              >
                Сохранить
              </Button>
            </div>
          )
      }
      wrapClassName={style.wrap}
      bodyStyle={{
        flexDirection: 'row',
        minHeight: 'calc(100vh - 55px)',
        display: 'flex',
        padding: 0,
        flexGrow: 1,
      }}
    >
      <Form initialValues={{
        title: task.title,
        // description,
        // ratingCategory,
        // points,
        // deadline,
        // tag,
        isCanComment: false,
        isCanEdit: false
      }} id="test" style={{ display: 'flex', justifyContent: 'space-between' }} onFinish={handleSubmit}>
        <span style={{ width: '0' }}></span>
        <div style={{ width: '63rem' }} className={style.modal__mainContent}>
          <div className={style.modal__content}>
            <Form.Item name='title'>
              <TextArea
                className={style.modal__mainContent__textarea}
                placeholder="Название"
                autoSize
                defaultValue={task.title ? task.title : ''}
              />
            </Form.Item>
            <Form.Item name='description'>
              <Tiptap content={task.htmlContent} setStateShow={setTextareaValue} />
            </Form.Item>
          </div>
        </div>
        <div className={style.modal__side}>
          <AppDropdown children={students} inputTitle="Все учащиеся" title="Все учащиеся" width="256px" />
          <div style={{ display: 'flex', columnGap: '5px' }}>
            <div style={{ width: '256px' }}>
              <p className={style.modal__name}>Категория оценок</p>
              <Form.Item name='ratingCategory'>
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
              </Form.Item>
            </div>
            <div style={{ width: '256px' }}>
              <p className={style.modal__name}>Баллы</p>
              <Form.Item name='points'>
                <Dropdown
                  className={style.modal__dropdown}
                  overlayStyle={{
                    display: balls === 'Без оценки' ? 'none' : undefined,
                  }}
                  menu={{ items }}
                >
                  <InputApp value={balls} onChange={handleBallsInputChange} />
                </Dropdown>
              </Form.Item>
            </div>
          </div>
          <div className={style.modal__list}>
            <p className={style.modal__name}>Срок сдачи</p>
            <Form.Item name='deadline'>
              <AppDropdown inputTitle={date ? date : 'Срок сдачи не задан'} children={datePickItems} width="100%" />
            </Form.Item>
          </div>
          <div className={style.modal__list}>
            <p className={style.modal__name}>Тема</p>
            <Form.Item name='tag'>
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
            </Form.Item>
          </div>
          <div className={style.modal__list}>
            <div>
              <Form.Item name='isCanComment'>
                <Checkbox>Учащиеся могут комментировать ответы друг друга</Checkbox>
              </Form.Item>
            </div>
            <div>
              <Form.Item name='isCanEdit'>
                <Checkbox>Учащиеся могут редактировать ответы</Checkbox>
              </Form.Item>
            </div>
          </div>
        </div>
      </Form>
    </FullScreenModal>
  );
};


export const TasksModal = observer(TasksModalComponent);

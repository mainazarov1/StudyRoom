import { CaretDownOutlined, CloseOutlined, DownOutlined, QuestionCircleTwoTone, TeamOutlined, } from '@ant-design/icons';
import { Avatar, Button, Checkbox, DatePicker, type DatePickerProps, Dropdown, Form, Input, type MenuProps, Select, Space, Menu, } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import { FC, MouseEvent, useState } from 'react';
import TextArea from 'antd/lib/input/TextArea';
import { observer } from 'mobx-react';
import dayjs from 'dayjs';
import { ItemType } from 'antd/lib/menu/hooks/useItems';

import { InputApp } from '../../../../components/InputApp/InputApp';
import { Tiptap } from '../../../../components/TextArea/TextAreaComponent';
import FullScreenModal from '../../../../containers/FullScreenModal/FullScreenModal';
import { TaskApi } from '../../../../core/types/types';

import style from './tasksModal.module.scss';

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
}) => {
  const [textareaValue, setTextareaValue] = useState<string>('');
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
  const [form] = Form.useForm();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
  const [theme, setTheme] = useState<string>('Без темы');
  const students = ['Все учащиеся', 'Sergey', 'Andrey'];
  const onItemMenuClick = (values: any) => {
    console.log(values);
  };
  const handleCheckboxChange = (student: string, checked: boolean) => {
    if (checked) {
      console.log(form.getFieldValue('students'));

      form.getFieldValue('students').push(student);
      setSelectedStudents([...selectedStudents, student]);
    } else {
      const newSt = selectedStudents.filter((st) => st !== student);
      setSelectedStudents(selectedStudents.filter((st) => st !== student));
      form.setFieldValue('students', newSt);
    }
  };
  const onSubmit = (values: MouseEvent) => {
    form.submit();
    console.log(values);
  };
  const onFinish = (values: MouseEvent) => {
    try {
      handleClose();
      console.log('Received values of form: ', values);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSetCategory = (value: string) => {
    if (+value !== 0) {
      form.setFieldsValue({ points: value });
    }
  };
  const handleSetTheme = (value: string) => {
    if (value === 'Создать тему') {
      form.setFieldsValue({ theme: '' });
      setTheme('Создать тему');
    } else {
      form.setFieldsValue({ theme: value });
      setTheme(value);
    }
  };
  const onOk = (value: DatePickerProps['value']) => {
    const currentDate = dayjs(value?.toString());
    dayjs.locale('ru');
    const formattedDate = currentDate.format('DD MMMM YYYY Z');
    form.setFieldsValue({ deadline: formattedDate });
    setIsOpen(false);
  };

  const pointsItems = [
    { label: <span onClick={(e) => e.currentTarget.innerText}>Без оценки</span>, key: 'Без оценки' },
  ];
  const categoryItems: { label: JSX.Element; value: string }[] = [
    { label: <span>Без категории</span>, value: '0' },
    {
      label: <span>Эссе</span>,
      value: '100',
    },
  ];
  const datePickItems: ItemType[] = [
    {
      label: (<Menu>
        <MenuItem>
          <DatePicker placeholder='Срок сдачи не задан' format="YYYY-MM-DD HH:mm" showTime onOk={onOk} />
        </MenuItem>
      </Menu>), key: form.getFieldValue('deadline') ? form.getFieldValue('deadline') : 'Срок сдачи не задан'
    }
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
        // eslint-disable-next-line no-constant-condition
        true
          ? (
            <div className={style.modal__dropdownButton}>
              <Dropdown.Button
                htmlType='submit'
                trigger={['click']}
                type='text'
                onClick={onSubmit}
                icon={<CaretDownOutlined style={{ color: '#fff' }} />}
                menu={{ items: saveButtonItems, onClick: onItemMenuClick }}
              >
                Создать задание
              </Dropdown.Button>
            </div>
          ) : (
            <div className={style.modal__saveButton}>
              <Button
                htmlType='submit'
                onClick={onSubmit}
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
      <Form
        form={form}
        initialValues={{
          title: task.title,
          students: [],
          ratingCategory: 'Без категории',
          points: 'Без оценки',
          deadline: 'Срок сдачи не задан',
          theme: '',
          isCanComment: false,
          isCanEdit: false
        }}
        id="test"
        style={{ display: 'flex', justifyContent: 'space-between' }}
        onFinish={onFinish}>
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
          <div>
            <p className={style.modal__name}>Категория оценок</p>
            <Form.Item name='students' >
              <Dropdown trigger={['click']} overlayStyle={{ width: '256px' }} className={style.course_list} overlay={
                <Menu className={style.modal__menu}>
                  {students.map((student) => (
                    <MenuItem className={style.modal__menuItem} key={student}>
                      <Checkbox className={style.modal__checkbox} checked={selectedStudents.includes(student)} onChange={(e) => handleCheckboxChange(student, e.target.checked)} >
                        <Space size={'middle'} style={{ height: '3.5rem' }} align='center'>
                          <Avatar style={{ backgroundColor: '#1890ff' }} icon={<TeamOutlined />} />
                          {student}
                        </Space>
                      </Checkbox>
                    </MenuItem>
                  ))}
                </Menu>
              }>
                <Space>
                  {selectedStudents.length
                    ? `${selectedStudents.length} students selected`
                    : 'Select students'}{' '}
                  <DownOutlined />
                </Space>
              </Dropdown>
            </Form.Item>
            <div style={{ display: 'flex', columnGap: '5px' }}>
              <div style={{ width: '256px' }}>
                <p className={style.modal__name}>Категория оценок</p>
                <Form.Item name='ratingCategory' >
                  <Select
                    className={style.modal__select}
                    defaultValue="Без категории"
                    onChange={handleSetCategory}
                    style={{
                      width: 143,
                      height: 46,
                    }}
                    options={categoryItems}
                  />
                </Form.Item>
              </div>
              <div style={{ width: '256px' }}>
                <p className={style.modal__name}>Баллы</p>
                <Dropdown
                  trigger={['click']}
                  overlayStyle={{
                    display: form.getFieldValue('points') === 'Без оценки' ? 'none' : undefined,
                    paddingTop: '1rem',
                  }}
                  menu={{ items: pointsItems, onClick: (e) => form.setFieldValue('points', e.key) }}
                >
                  <Form.Item name='points'>
                    <InputApp className={style.modal__dropdown} />
                  </Form.Item>
                </Dropdown>
              </div>
            </div>
            <div className={style.modal__list}>
              <p className={style.modal__name}>Срок сдачи</p>
              <Dropdown trigger={['click']} open={isOpen} onOpenChange={() => setIsOpen(!isOpen)} menu={{ items: datePickItems }}>
                <Form.Item name='deadline' >
                  <Button>
                    {form.getFieldValue('deadline') ? form.getFieldValue('deadline') : 'Срок сдачи не задан'} <DownOutlined />
                  </Button>
                </Form.Item>
              </Dropdown>
            </div>
            <div className={style.modal__list}>
              <p className={style.modal__name}>Тема</p>
            </div>
            <Dropdown
              menu={{ items: themeDropdownItems, onClick: (e) => handleSetTheme(e.key) }}
              trigger={['click']}
              overlayStyle={{
                display: theme === 'Создать тему' ? 'none' : undefined,
                width: '16.25rem',
                height: 46,
              }}
            >
              <Form.Item name='theme' >
                {theme === 'Создать тему' ?
                  <Input
                    autoFocus
                    suffix={<CloseOutlined style={{ fontSize: '18px' }} onClick={() => handleSetTheme} />}
                  /> : <Button><Space>{theme}</Space></Button>}
              </Form.Item>
            </Dropdown>
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

// const [balls, setBalls] = useState<number | string>(0);
// const [date, setDate] = useState<string | [string, string]>('');
// const [cursor, setCursor] = useState<string>('pointer');


// const [isOpen, setIsOpen] = useState<boolean>(false);
// const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
// const [theme, setTheme] = useState<string>('Без темы');
// const studentsI = ['Все учащиеся', 'Sergey', 'Andrey'];
// // const [visible, setVisible] = useState(false);
// const [form] = Form.useForm();

// const onChange = (checkedValues: object) => {
//   console.log(checkedValues, 'onchange');
//   console.log(textareaValue);
// };

// const onOk = (value: DatePickerProps['value']) => {
//   const currentDate = dayjs(value?.toString());
//   dayjs.locale('ru');
//   const formattedDate = currentDate.format('DD MMMM YYYY Z');
//   setDate(formattedDate);
// };

// const datePickItems = (
//   <>
//     <MenuItem>
//       <DatePicker placeholder='Срок сдачи не задан' format="YYYY-MM-DD HH:mm" showTime onOk={onOk} />
//     </MenuItem>
//   </>
// );
// const students = (
//   <>
//     <MenuItem className={style.modal__menuItem} style={{ cursor: 'pointer' }}>
//       <Checkbox className={style.modal__checkbox}>
//         <Space size={'middle'} style={{ height: '3.5rem' }} align='center'>
//           <Avatar style={{ backgroundColor: '#1890ff' }} icon={<TeamOutlined />} />
//           Все учащиеся
//         </Space>
//       </Checkbox>
//     </MenuItem>
//     <MenuItem className={style.modal__menuItem} onClick={onChange} style={{ cursor: 'pointer' }}>
//       <Checkbox className={style.modal__checkbox}>
//         <Space size={'middle'} style={{ height: '2.5rem' }} align='center'>
//           <Avatar style={{ backgroundColor: '#1890ff' }} icon={<TeamOutlined />} />
//           Sergey
//         </Space>
//       </Checkbox>
//     </MenuItem>
//     <MenuItem className={style.modal__menuItem} onClick={onChange} style={{ cursor: 'pointer' }}>
//       <Checkbox className={style.modal__checkbox}>
//         <Space size={'middle'} style={{ height: '3.5rem' }} align='center'>
//           <Avatar style={{ backgroundColor: '#1890ff' }} icon={<TeamOutlined />} />
//           Andrey
//         </Space>
//       </Checkbox>
//     </MenuItem>
//   </>
// );

// const handleBallsInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//   setBalls(e.target.value);
// };

// const handleSetCategory = (value: string) => {
//   if (+value !== 0) {
//     form.setFieldsValue({
//       note: value,
//     });
//     setBalls(value);
//   }
// };

// const setBallsToDefault = (e: MouseEvent<HTMLSpanElement>) => {
//   setBalls(e.currentTarget.innerText);
// };

// const items = [
//   { label: <span onClick={(e) => setBallsToDefault(e)}>Без оценки</span>, key: 'item-1' },
// ];
// const itemstwo: { label: JSX.Element; value: string }[] = [
//   { label: <span>Без категории</span>, value: '0' },
//   {
//     label: <span>Эссе</span>,
//     value: '100',
//   },
// ];

// const themeDropdownItems: MenuProps['items'] = [
//   {
//     label: (
//       <span>
//         Без темы
//       </span>
//     ),
//     key: 'Без темы',
//   },
//   {
//     label: (
//       <span>
//         Создать тему
//       </span>
//     ),
//     key: 'Создать тему',
//   },
//   {
//     type: 'divider',
//   },
//   {
//     label: (
//       <span>
//         Теги
//       </span>
//     ),
//     key: 'Теги',
//   },
// ];
// const onClick: MenuProps['onClick'] = ({ key }) => {
//   if (key === 'Создать тему') {
//     setCursor('auto');
//   } else {
//     setCursor('pointer');
//   }
//   setTheme(key);
// };


{/* <div className={style.modal__side}>
          <AppDropdown inputTitle="Все учащиеся" title="Все учащиеся" width="256px" >
            {students}
          </AppDropdown>
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
              <AppDropdown inputTitle={date ? date : 'Срок сдачи не задан'} width="100%" >
                {datePickItems}
              </AppDropdown>
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
        </div> */}
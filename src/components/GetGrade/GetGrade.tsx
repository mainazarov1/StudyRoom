import { EllipsisOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps, InputNumber, Typography } from 'antd';
import { useState } from 'react';
import s from '../../pages/Tasks/Tasks.module.scss';

const items: MenuProps['items'] = [
  {
    label: 'Вернуть',
    key: '0',
  },
  {
    label: 'Посмотреть сданную работу',
    key: '1',
  }
];

const GetGrade = (props: { recordProp: number }) => {
  const [value, setValue] = useState<number | null | string>(props.recordProp);
  const [editing, setEditing] = useState(false);

  const handleChangeEdit = () => {
    setEditing(editing => !editing);
  }

  const onChange = (valueProp: number | null | string) => {
    setValue(valueProp);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div className='table-dropdown-cell-grade'>
        {editing ? (
          <InputNumber min={0} style={{ width: '100%' }} value={value} onChange={onChange} onPressEnter={handleChangeEdit} autoFocus onBlur={handleChangeEdit} />
        ) : (
          <Typography.Text onClick={handleChangeEdit}>{value ? value : 'Пусто'}</Typography.Text>
        )}
      </div>
      <div className='table-dropdown-cell'>
        <Dropdown
          placement={'bottomRight'}
          className={s.collapse__head__dropdown}
          trigger={['click']}
          menu={{ items }}
        >
          <EllipsisOutlined
            className={s.collapse__elipsis}
            style={{ fontSize: '20px', color: 'rgb(0,0,0)' }}
            color='green'
            rotate={90}
          />
        </Dropdown>
      </div>
    </div>)
};

export default GetGrade;
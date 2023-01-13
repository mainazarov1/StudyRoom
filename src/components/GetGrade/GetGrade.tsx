import { EllipsisOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps, InputNumber, Typography } from 'antd';
import { useState } from 'react';
import s from '../../pages/Tasks/Tasks.module.scss';
import { gradeStore } from '../../core/store/grade';

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
  const [value, setValue] = useState<number | null>(props.recordProp);
  const [editing, setEditing] = useState(false);

  gradeStore.setValue(value);
  gradeStore.setEditing(editing)

  const handleChangeEdit = () => {
    setEditing(editing => !editing);
  }

  const onChange = (valueProp: number | null) => {
    setValue(valueProp);
  }

  console.log(gradeStore.value, gradeStore.editing)

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div className='table-dropdown-cell-grade'>
        {editing ? (
          <InputNumber min={0} style={{ width: '100%' }} value={value} onChange={onChange} onPressEnter={handleChangeEdit} autoFocus onBlur={handleChangeEdit} />
        ) : (
          <Typography.Text style={{color: '#1e8e3e'}} onClick={handleChangeEdit}>
            {value ? value : 'Не назначено' ? <Typography.Text style={{color: '#c5221f'}}>Не назначено</Typography.Text>: ''}
          </Typography.Text>
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
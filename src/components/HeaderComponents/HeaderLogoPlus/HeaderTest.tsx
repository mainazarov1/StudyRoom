import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps } from 'antd';
import Title from 'antd/lib/typography/Title';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'Аккаунт',
  },
  {
    key: '2',
    label: 'Почта',
  },
  {
    key: '3',
    label: 'Настройки',
  }
];
export const HeaderTest = () => {
  return (
    <>
      <div className='item left-item'>
        <Title style={{ margin: 0 }} level={4}>lorem10</Title>
      </div>
      <div className='item right-item'>
        <Dropdown className='plus' menu={{ items: items }} trigger={['click']}>
          <a onClick={e => e.preventDefault()}>
            <EditOutlined className='icon plus' />
          </a>
        </Dropdown>
      </div>
    </>
  );
};
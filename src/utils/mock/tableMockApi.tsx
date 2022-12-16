import { MoreOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Space } from "antd";
import styles from './../../pages/Users/Users.module.scss';
const items = [{ key: '1', label: 'Action 1' }, { key: '2', label: 'Action 2' }]

export const columns = [
	{
		title: 'Avatar',
		dataIndex: 'avatar',
		key: 'avatar',
		width: '40px',
	},
	{
		title: 'Fullname',
		dataIndex: 'fullname',
		key: 'fullname',
	},
	{
		title: 'Actions',
		dataIndex: 'actions',
		key: 'actions',
		align: 'right',
		render: () => (
			<Space size="middle">
				<Dropdown menu={{ items }} trigger={['click']}>
					<MoreOutlined
						className={styles.users__icon}
					// onClick={() => alert('click')}
					/>
				</Dropdown>
			</Space>
		)
	}
]
export const data = [
	{
		key: 1,
		avatar: <Avatar src="https://www.nea.org/sites/default/files/legacy/2020/04/new_teacher.jpeg" />,
		fullname: 'Ivanov Ivan Ivanovich',
	},
	{
		key: 2,
		avatar: <Avatar src="https://www.nea.org/sites/default/files/legacy/2020/04/new_teacher.jpeg" />,
		fullname: 'Ivanov Ivagdgn Ivanovich',
	},
	{
		key: 3,
		avatar: <Avatar src="https://www.nea.org/sites/default/files/legacy/2020/04/new_teacher.jpeg" />,
		fullname: 'Ivanov Ivan Ivanovich',
	},
	{
		key: 4,
		avatar: <Avatar src="https://www.nea.org/sites/default/files/legacy/2020/04/new_teacher.jpeg" />,
		fullname: 'Ivanov Ivan Ivanovich',
	},
]
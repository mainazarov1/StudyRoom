import { DownOutlined, MoreOutlined } from "@ant-design/icons"
import { Avatar, Dropdown, Space, Table } from "antd"
import { type ColumnsType } from "antd/es/table"
import styles from './../../pages/Users/Users.module.scss'
// interface DataType {
// 	key: number,
// 	fullname: string,
// 	avatar: JSX.Element,
// }
interface UsersTableProps { 
	columns: ColumnsType<any>,
	data: any[],
}
export const UsersTable = ({columns, data, ...args}: UsersTableProps) => {
	
	
	return (
		<Table
			// size="small"
			pagination={false}
			showHeader={false}
			columns={columns}
			dataSource={data}
			{...args}
			// rowSelection={{
			// 	columnWidth:'10px'
			// }}
		/>
	)
}
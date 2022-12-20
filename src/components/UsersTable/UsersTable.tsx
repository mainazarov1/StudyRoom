import { DownOutlined, MoreOutlined } from "@ant-design/icons"
import { Avatar, Dropdown, Space, Table } from "antd"
import { type ColumnsType } from "antd/es/table"
import { TableRowSelection } from "antd/lib/table/interface"
import styles from './../../pages/Users/Users.module.scss'
// interface DataType {
// 	key: number,
// 	fullname: string,
// 	avatar: JSX.Element,
// }
interface UsersTableProps { 
	columns: ColumnsType<unknown>,
	data: any[],
	checkbox: boolean,
	showHeader: boolean
}
export const UsersTable = ({columns, data, checkbox, showHeader = false, ...args}: UsersTableProps) => {
	
	
	return (
		<Table
			// size="small"
			pagination={false}
			showHeader={showHeader}
			columns={columns}
			dataSource={data}
			{...args}
			rowSelection={
				(checkbox &&
				{
				columnWidth:'10px'
				})
			}
		/>
	)
}
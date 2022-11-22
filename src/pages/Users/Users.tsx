import { Divider, Layout, Typography } from "antd"
import { Content } from "antd/lib/layout/layout"
import styles from './Users.module.scss'
const { Title } = Typography
const users = [
	{
		fullname: 'Иванов Иван Иванович',
		role: 'admin',
		avatar: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
	},
	{
		fullname: 'Иванов',
		role: 'teacher',
		avatar: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
	},
	{
		fullname: 'Иванович',
		role: 'student',
		avatar: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
	},
	{
		fullname: 'Иванов Иван Иванович',
		role: 'student',
		avatar: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
	},
]
export const Users = () => {
	return (
		<div
			className={styles.users}
		>
			<div className={styles.users__wrap}>
				<div className={styles.users__column}>
					<header>
						<Title className={styles.users__title} level={5}>Users</Title>
						<button>+</button>
					</header>
					<Divider />
					<div className={styles.users__list}>
						{
							users.map((user, index) => {
								return (
									<div className={styles.users__item} key={index}>
										<img src={user.avatar} alt="avatar" />
										<div className={styles.users__info}>
											<div className={styles.users__name}>{user.fullname}</div>
											<div className={styles.users__role}>{user.role}</div>
										</div>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
		</div>
	)
}
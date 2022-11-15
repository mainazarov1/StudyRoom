import { FC, ReactNode } from 'react';
import { Button } from 'antd';

import styles from './ButtonApp.module.scss';
type Props = {
	label?: string;
	icon?: JSX.Element;
	onClick?: () => void;

}
export const ButtonApp: FC<Props> = ({ label, ...rest }) => {
	return (
		<Button className={styles.button}
			style={
				{
					borderRadius: label ? '4px' : '50%',
					padding: label ? '10px 20px' : '10px',
				}
			}
			{...rest}

		>
			{label}
		</Button>
	)
}
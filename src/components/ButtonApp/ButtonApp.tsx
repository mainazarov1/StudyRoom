import { FC } from 'react';
import { Button } from 'antd';
import classNames from 'classnames';

import styles from './ButtonApp.module.scss';

type ButtonAppProps = {
  label?: string | null;
  icon?: JSX.Element;
  onClick?: () => void;
  classNameProp?: any;
};

export const ButtonApp: FC<ButtonAppProps> = ({ label, classNameProp, ...rest }) => {
	return (
		<Button className={classNames(classNameProp, styles.button)}
			style={
				{
					borderRadius: label ? '4px' : '50%',
					padding: label ? '10px 20px' : '10px',
				}
			}
			{...rest}
		>
			{label}
		</Button >
	)
}
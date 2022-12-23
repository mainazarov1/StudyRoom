import { useState } from 'react';

import styles from './IconContainer.module.scss';
interface IconContainerProps {
  className?: string;
  icon: JSX.Element;
  color?: string;
  initColor?: string;
  onClick?: () => void;
}
export const IconContainer = ({
  className,
  icon,
  color,
  initColor,
  onClick,
}: IconContainerProps) => {
  const [isHover, setIsHover] = useState(false);
  // const handleMouseEnter = () => {
  // 	setIsHover(true);
  // };
  // const handleMouseLeave = () => {
  // 	setIsHover(false);
  // };
  const handleMouse = () => {
    setIsHover(!isHover);
  };

  return (
    <button
      className={styles.button + ' ' + className}
      onMouseEnter={handleMouse}
      onMouseLeave={handleMouse}
      onClick={onClick}
      // style={{
      //   backgroundColor: isHover ? color : initColor,
      // }}
    >
      {icon}
    </button>
  );
};

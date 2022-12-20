import { message } from 'antd';

export const CopyPaste = (text: string) => {
  navigator.clipboard.writeText(text);
  message.info('Ссылка скопирована ');
};

export const handleChangeColor = (color: string) => {
  const root = document.querySelector(':root') as HTMLElement;
  root.style.setProperty('--default-color', `var(--${color}-color)`);
  root.style.setProperty('--default-hover-color', `var(--${color}-hover-color)`);
};

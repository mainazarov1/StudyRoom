import { message } from 'antd';

export const CopyPaste = (text: string) => {
  navigator.clipboard.writeText(text);
  message.info('Ссылка скопирована ');
};

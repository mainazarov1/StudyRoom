import React from 'react';
import { Select } from 'antd';

interface IprposObj {
  value: string,
  label: string,
}
interface IProps {
  option: IprposObj[],
}

const SelectListLesson: React.FC<IProps> = ({option}) => {

  return (
    <Select
      defaultValue="Все курсы"
      style={{ width: 340, margin: '0 0 24px 24px' }}
      size="large"
      options={option}
    />
  );
};

export default SelectListLesson;
import React from 'react';
import { Select } from 'antd';


const SelectListLesson: React.FC = () => {
  const handleChange = (value: string) => {
    console.log(value);
  };

  const optionList = [
    { value: 'jack', label: 'Jack',},
    { value: 'lucy', label: 'Lucy',},
    { value: 'disabled', label: 'Disabled',},
    { value: 'Yiminghe', label: 'yiminghe',},
  ];

  return (
    <Select
      defaultValue="Все курсы"
      style={{ width: 340, margin: '0 0 24px 24px' }}
      size="large"
      onChange={handleChange}
      options={optionList}
    />
  );
};

export default SelectListLesson;
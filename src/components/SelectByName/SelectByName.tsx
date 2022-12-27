import { CaretDownOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import React from 'react';

const selectOptionList = [
    { value: 'Сортировать по фамилии' },
    { value: 'Сортировка по имени' },
  ];

const SelectByName = () => {
    return (
        <Select
          defaultValue="Сортировать по имени"
          suffixIcon={<CaretDownOutlined />}
          bordered={false}
          options={selectOptionList.map((item) => ({ value: item.value }))}
        />
      )
};

export default SelectByName;
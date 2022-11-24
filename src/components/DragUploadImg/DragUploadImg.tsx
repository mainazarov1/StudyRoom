import { Upload } from 'antd';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import React, { useState } from 'react';
import ImgCrop from 'antd-img-crop'
import { InboxOutlined } from '@ant-design/icons';

const DragUploadImg: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <>
      <ImgCrop 
        rotate
        aspect={4/1}
      >
      <Upload.Dragger
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture"
        fileList={fileList}
        maxCount={1}
        onChange={onChange}
        onPreview={onPreview}
        style={{height: 300}}
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Кликните или переташите для загрузки ю</p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading company data or other
          band files
        </p>
      </Upload.Dragger>
    </ImgCrop>
    </>
  );
};

export default DragUploadImg;
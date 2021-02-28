import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './Loader.scss';

const antIcon = <LoadingOutlined style={{ fontSize: 48, color: 'red' }} spin />;

export const Loader = () => (
  <div className="loader">
    <Spin indicator={antIcon} />
  </div>
);

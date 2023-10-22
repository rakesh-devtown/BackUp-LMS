import React from 'react';
import { Progress, Space } from 'antd';
const ProgressBar = () => (
  <Space wrap>
    <Progress type="circle" percent={75} size={300} strokeWidth={15}/>    
  </Space>
);
export default ProgressBar;
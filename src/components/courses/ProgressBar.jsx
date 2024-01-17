import React from 'react';
import { Progress, Space } from 'antd';
const ProgressBar = ({percent  }) => (
  <Space wrap>
    <Progress type="circle" percent={percent} size={window.innerWidth < 1163 ? 200  :300} strokeWidth={10}/>    
  </Space>
);
export default ProgressBar;
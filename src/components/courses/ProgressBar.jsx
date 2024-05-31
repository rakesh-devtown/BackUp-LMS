import React from 'react';
import { Progress, Space } from 'antd';
import useWindowSize from '../../hooks/useWindowSize';
const ProgressBar = ({ percent }) => {
  const { width } = useWindowSize()
  return (

    <Progress type={width >= 1284 ? "circle" : "line"} size={width >= 1284 ? 350 : "default"} percent={percent} strokeWidth={width >= 1284 ? 10 : 15} />
    // </Space>
  )
};
export default ProgressBar;
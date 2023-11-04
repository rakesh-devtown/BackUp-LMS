import React from 'react';
import { Dropdown, Menu } from 'antd';
// { VerticalEllipsisOutlined } from '@ant-design/icons';

function KebabMenu() {
  const menu = (
    <Menu>
      <Menu.Item key="1">Option 1</Menu.Item>
      <Menu.Item key="2">Option 2</Menu.Item>
      <Menu.Item key="3">Option 3</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} placement="bottomRight">
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        {/* <VerticalEllipsisOutlined /> */}
      </a>
    </Dropdown>
  );
}

export default KebabMenu;

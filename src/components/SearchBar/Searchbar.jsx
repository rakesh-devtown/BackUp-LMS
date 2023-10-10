import { AudioOutlined } from '@ant-design/icons';
import React from 'react';
import { Input, Space } from 'antd';
const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);
const SearchBar = () => (
    <Search
      placeholder="search course"
      onSearch={onSearch}
      style={{
        width: 600,
        fontSize: "30px ",
      }}
    />

)
export default SearchBar;
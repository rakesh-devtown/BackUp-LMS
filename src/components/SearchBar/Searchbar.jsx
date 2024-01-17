import React, { useEffect } from 'react';
import { Input, Space } from 'antd';
import useProgramStore from '../../store/programStore';
import { useLocation } from 'react-router-dom';
const { Search } = Input;

const SearchBar = () => {
  const name = useProgramStore((state) => state.name);
  const setName = useProgramStore((state) => state.setName);

  const onSearch = (value, _e, info) => { 
    setName(value);
    console.log(info?.source, value);
  }
  const location = useLocation()
  useEffect(() => {
    console.log(name);
    
  }, [name ]);
  return (
  
    <>
      {
        location.pathname === "/programs" && (
          <Search
          placeholder="search course"
          onSearch={onSearch}
          style={{
            width: 600,
            fontSize: "30px",
          }}
        />
        )
      }
    </>
    )
}

export default SearchBar;
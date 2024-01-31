import React, { useEffect } from "react";
import { Input, Space } from "antd";
import useProgramStore from "../../store/programStore";
import { useLocation } from "react-router-dom";
import { CourseSearch } from "../../styles/shared.styles";
const { Search } = Input;

const SearchBar = ({ collapsed }) => {
  const name = useProgramStore((state) => state.name);
  const setName = useProgramStore((state) => state.setName);
  const onHandleUserInput  = (e ) => {
    setName(e.target.value);
  }
  const onSearch = (value, _e, info) => {
    console.log(value, _e, info);
    setName(value);
  };
  const location = useLocation();
  useEffect(() => {}, [name]);
  return (
    <>
      {location.pathname === "/programs" && (
        <CourseSearch
          placeholder="Search Course"
          onChange={onHandleUserInput}
          onSearch={onSearch}
          collapsed={collapsed  }
        />
      )}
    </>
  );
};

export default SearchBar;

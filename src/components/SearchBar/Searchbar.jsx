import React, { useEffect } from "react";
import { Input, Space } from "antd";
import useProgramStore from "../../store/programStore";
import { useLocation } from "react-router-dom";
import { CourseSearch } from "../../styles/shared.styles";
const { Search } = Input;

const SearchBar = ({ collapsed }) => {
  const name = useProgramStore((state) => state.name);
  const setName = useProgramStore((state) => state.setName);

  const onSearch = (value, _e, info) => {
    setName(value);
  };
  const location = useLocation();
  useEffect(() => {}, [name]);
  return (
    <>
      {location.pathname === "/programs" && (
        <CourseSearch
          placeholder="search course"
          onSearch={onSearch}
          collapsed={collapsed.toString()  }
        />
      )}
    </>
  );
};

export default SearchBar;

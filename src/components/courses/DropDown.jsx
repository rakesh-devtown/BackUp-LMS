import { Select } from 'antd';
const { Option } = Select;
function DropDown() {
    function handleChange(value) {
    }
  
    return (
      <Select defaultValue="All" style={{ width: 200, cursor:'pointer',marginLeft:'3rem'}} onChange={handleChange}>
        <Option value="All">All</Option>
        <Option value="Done">Done</Option>
        <Option value="Expired">Expired</Option>
      </Select>
    );
  }
  
  export default DropDown;
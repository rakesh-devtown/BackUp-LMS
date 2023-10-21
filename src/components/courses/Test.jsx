import React from 'react';
import { Divider, List, Typography , Button} from 'antd';

const data = [
  'Test1 ',
  'Test2 ',
  'Test3 ',
  
];
const Test = () => (
  <>
   
    <List
     
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={{display:'flex', height:'3rem ' , alignContent:'flex-start', justifyContent:'left'}}>
       
          <Typography.Text mark ></Typography.Text> {  item  }
          <Button type="primary" style={{marginLeft:'3rem'}}>Upcoming</Button>
          
        </List.Item>
      )}
    />
    
   
  </>
);
export default Test;
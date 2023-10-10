import React from 'react';
import { Collapse } from 'antd';
import styled from 'styled-components';
import { Typography } from "antd";  
import {RightOutlined, EyeOutlined} from '@ant-design/icons'
import { Button, Space } from 'antd';
import ReactPlayer from 'react-player';


const { Title, Text } = Typography;


const text = `
  A dog is a type of domesticated animal.
  
`;
const items = [
  {
    key: '1',
    label: 'Part A - Introduction',
    children: [1,2,3,4],
  },
  {
    key: '2',
    label: 'Part B - Basics of C++',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'Part C - Pointers & Dynamic Array',
    children: <p>{text}</p>,
  },
];

const StyledVideoBox = styled.div`
  width:100%;
  display:flex;
  gap:1rem;  
`;

const StyledLeft = styled.div`
  width:75%;
  display:flex;
  flex-direction:column;
  justify-content: space-between;
`

const StyledHeading = styled.div`
    
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  align-items:center;
  padding:1rem;
  /* margin-top:1rem; */
`
const StyledHeadingSubPart = styled.div`
     display:flex;
  flex-direction:row;
  gap:1rem;
  align-items:center;
`
const StyledText = styled(Text)`
    
    font-size:1.25rem;
    line-height:1.75rem;
    font-weight:600;
`

const OnlySpaceBetween = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledProgramsText = styled(Text)`
    
    font-size:1.25rem;
    line-height:1.75rem;
    font-weight:600;
    color:rgb(163 162 162);
`

const StyledSubText = styled(Text)`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  color: rgb(129, 129, 129);
`;
const StyledBox = styled.div`
width:100%;
  border: 1px solid black;
`


const VideoDetail = () => (
    <>
    <StyledVideoBox>
        <StyledLeft>
        <StyledHeading>
    <StyledHeadingSubPart>
<StyledProgramsText>My Programs</StyledProgramsText>
<RightOutlined />
<StyledText>Competitve Programming</StyledText>
</StyledHeadingSubPart>
</StyledHeading>
<StyledHeading>
    <OnlySpaceBetween>
<StyledText>Competitve Programming video 1 </StyledText>
<Button type="primary" icon={<EyeOutlined />}>Marked as Watched</Button>
</OnlySpaceBetween>
</StyledHeading>
<ReactPlayer width='650px' height='450px' style={{padding:'0.5rem'}} controls={true} url='https://youtu.be/BISJi_mMi7U?list=RD0UF_bT4CgtU'/>
<StyledHeading>
<StyledText>Course Overview</StyledText>
</StyledHeading>
<StyledHeading>
<StyledSubText>Competitve Programming</StyledSubText>

</StyledHeading>
        </StyledLeft>
        <StyledBox>
        <Collapse defaultActiveKey={['1']} style={{borderStyle:'solid'}}ghost items={items} />
        </StyledBox>
    </StyledVideoBox>
    
</>

             
  
);
export default VideoDetail;
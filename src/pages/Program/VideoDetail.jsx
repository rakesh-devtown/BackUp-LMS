import React from 'react';
import { Collapse } from 'antd';
import styled from 'styled-components';
import { Typography } from "antd";  
import {RightOutlined, EyeOutlined} from '@ant-design/icons'
import { Button, Space } from 'antd';
import ReactPlayer from 'react-player';
import Dropdown from './Dropdown';
import Vimeo from '@u-wave/react-vimeo';

const { Title, Text } = Typography;


const StyledVideoBox = styled.div`
  width:100%;
  display:flex;
  gap:1rem;  
  justify-content:space-between;

  @media (max-width: 768px) {
    flex-direction: column; 
    justify-content:center;
    align-items:center;
  }
`;

const StyledLeft = styled.div`
  width:70%;
  display:flex;
  flex-direction:column;
  justify-content: space-between;
`
const StyledRight = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
`

const StyledHeading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column; /* Change to column layout */
    justify-content: flex-start; /* Center horizontally */
  }

  /* Optional: Add flex-wrap property to allow content to wrap */
  @media (max-width: 768px) {
    flex-wrap: nowrap;
  }
`;

const StyledHeadingSubPart = styled.div`
     display:flex;
  flex-direction:row;
  gap:1rem;
  align-items:center;
`
const StyledVideoTitle = styled.div`
     display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  padding-top:1rem;
  padding-bottom:1rem;
  

    @media (max-width: 768px) {
      flex-direction:column;
      gap:0.5rem;
    }

`


const StyledText = styled(Text)`
    
    font-size:1.25rem;
    line-height:1.75rem;
    font-weight:600;
    @media (max-width: 768px) {
      font-weight:400;
      font-size:1.125rem;
    }
`

const StyledVideoTitleText = styled(Text)`
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 600;
    width:100%;
    @media (max-width: 768px) {
      font-size:1rem;
      font-weight:600;
      display:flex;
      justify-content:center;
      align-items:center;
    
    }
    /* display:flex; */
    /* justify-content:flex-start; */
    /* align-items: center; */
    
`;

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

    @media (max-width: 768px) {
        display: none;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        display: none;
    }
`

const StyledCourseText = styled(Text)`
    
    font-size:1.25rem;
    line-height:1.75rem;
    font-weight:600;
    color:rgb(163 162 162);
    padding:1rem 1rem;
    display:flex;
    justify-content:center;
    align-items:center;
`

const StyledSubText = styled(Text)`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  color: rgb(129, 129, 129);
  @media (max-width: 768px) {
      display: flex;
      justify-content:center;
      align-items:center;
      
    }
`;



const VideoDetail = () => (
    <>
    <StyledVideoBox>
        <StyledLeft>
        <StyledHeading>
    <StyledHeadingSubPart>
<StyledProgramsText>My Programs</StyledProgramsText>
<StyledProgramsText><RightOutlined /></StyledProgramsText>
<StyledText>Competitve Programming</StyledText>
</StyledHeadingSubPart>
</StyledHeading>

    <StyledVideoTitle>
<StyledVideoTitleText>Competitve Programming video 1 </StyledVideoTitleText>
<Button type="primary" icon={<EyeOutlined />}>Marked as Watched</Button>
</StyledVideoTitle>

{/* <ReactPlayer width='720px' height='450px' style={{padding:'0.5rem'}} controls={true} url='https://youtu.be/BISJi_mMi7U?list=RD0UF_bT4CgtU'/> */}
<Vimeo
  video="https://vimeo.com/46354906"
  width={700}
  height={450}
  responsive={true}
/>
<StyledHeading>
<StyledText>Course Overview</StyledText>
</StyledHeading>

<StyledSubText>Competitve Programming (self paced)</StyledSubText>


        </StyledLeft>
        <StyledRight>
        <StyledCourseText>Course Content</StyledCourseText>
          <Dropdown/>

        </StyledRight>

       
    </StyledVideoBox>
    
</>

             
  
);
export default VideoDetail;
import React from "react";
import styled from "styled-components";
import { Typography } from "antd";
import {
  FormOutlined,
  GithubOutlined,
  LinkedinOutlined,
  EditOutlined,
  PlusOutlined,
  LinkOutlined
} from "@ant-design/icons";

import Dot from '../../assets/images/Ellipse.svg'

import { StyledHeader,StyledTitle,StyledDownloadText,StyledContentContainer,StyledAvatar,OnlyFlexCol,OnlyFlex,OnlyFlexM
,OnlySpaceBetween,OnlySpaceBetweenM,OnlyGap,StyledContent,StyledSectionSeparator,
StyledEditIcon,StyledLocation,StyledGenericText,StyledSubText,StyledDot,StyledSubContent,StyledInfo,StyledHeading,
StyledSkillsBg,StyledEachSkill,StyledProfileBox } from "../../styles/profile.styles";

const Profile = () => (
  <StyledProfileBox>
    <StyledHeader>
      <StyledTitle level={2}>My Profile</StyledTitle>
      <StyledDownloadText>Download Resume</StyledDownloadText>
    </StyledHeader>
    <StyledContentContainer>
    <OnlyFlex>

      <StyledContent>
        <OnlyFlexM>
          <StyledAvatar
            src="https://student-platform-assets.s3.ap-south-1.amazonaws.com/profile-pictures/36ee23beb4ed63a7f4513d8aae5e688d.jpeg"
            alt="Avatar"
          />
          <div>
            <StyledGenericText level={3}>Saumya Agarwal</StyledGenericText>
            <StyledLocation>Ghaziabad, Uttar Pradesh - 201017</StyledLocation>
          </div>
        </OnlyFlexM>
      </StyledContent>
      <EditOutlined style={{ fontSize: "20px", color: "#818181" }} />
</OnlyFlex>
      <StyledSectionSeparator />
      <StyledGenericText level={3}>Contact Information</StyledGenericText>
      <StyledContent>
        <OnlySpaceBetweenM>
          <OnlyFlexCol>
            <StyledSubText>Email</StyledSubText>
            <StyledSubContent>Saumyaagrawal106@gmail.com</StyledSubContent>
          </OnlyFlexCol>
          <OnlyFlexCol>
            <StyledSubText>Phone No</StyledSubText>
            <StyledSubContent>8957242825</StyledSubContent>
          </OnlyFlexCol>
          <OnlyFlexCol>
            <StyledSubText>Extra Details</StyledSubText>
            <StyledSubContent>
              <GithubOutlined /> <LinkedinOutlined />
            </StyledSubContent>
          </OnlyFlexCol>
        </OnlySpaceBetweenM>
      </StyledContent>
      <StyledSectionSeparator />
      <OnlySpaceBetween>
        <StyledGenericText level={3}>Work Experience</StyledGenericText>
        <PlusOutlined style={{ fontSize: "20px", color: "#818181" }} />
      </OnlySpaceBetween>
      <StyledContent>
          <OnlySpaceBetween>
            <StyledHeading level={4}>Organisation's Name</StyledHeading>
            <EditOutlined style={{ fontSize: "20px", color: "#818181" }} />
          </OnlySpaceBetween>
          </StyledContent>
          <OnlyFlex>
            <StyledSubText>React Developer</StyledSubText>
            <LinkOutlined />
            {/* <StyledDot>.</StyledDot> */}
            <img src={Dot} alt="bullet"/>
            <StyledSubText>July 2023 - September 2023</StyledSubText>
          </OnlyFlex>
          <StyledInfo>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusantium architecto 
            omnis? Sed ullam repellendus quos fuga vel reiciendis ab ipsum et beatae, perspiciatis
             expedita veniam ratione laudantium tempora aut!
          </StyledInfo>
          <StyledSectionSeparator/>
          <OnlySpaceBetween>
        <StyledGenericText level={3}>Education </StyledGenericText>
        <PlusOutlined style={{ fontSize: "20px", color: "#818181" }} />
      </OnlySpaceBetween>
      <OnlySpaceBetween>
        
      <StyledContent>
      <OnlyFlex>
            <StyledHeading level={4}>Institute's Name</StyledHeading>
            {/* <StyledDot>.</StyledDot> */}
            <img src={Dot} alt="bullet"/>
            <StyledSubText>March 2018 - March 2020</StyledSubText>
            </OnlyFlex>
      </StyledContent>
      <EditOutlined style={{ fontSize: "20px", color: "#818181" }} />
      
      </OnlySpaceBetween> 
      <StyledInfo>
        Grade : CGPA 80%
        </StyledInfo>
        <OnlySpaceBetween>
      <StyledContent>
      <OnlyFlex>
            <StyledHeading level={4}>Institute's Name</StyledHeading>
            {/* <StyledDot>.</StyledDot> */}
            <img src={Dot} alt="bullet"/>
            <StyledSubText>March 2018 - March 2020</StyledSubText>
            </OnlyFlex>
      </StyledContent>
      <EditOutlined style={{ fontSize: "20px", color: "#818181" }} />
      </OnlySpaceBetween> 
      <StyledInfo>
        Grade : CGPA 80%
        </StyledInfo>
        <StyledSectionSeparator/>
        <OnlySpaceBetween>
        <StyledGenericText level={3}>Projects </StyledGenericText>
        <PlusOutlined style={{ fontSize: "20px", color: "#818181" }} />
      </OnlySpaceBetween>
      <OnlySpaceBetween>
      <StyledContent>
      <OnlyFlex>
            <StyledHeading level={4}>Project Name</StyledHeading>
            <GithubOutlined/>
            <LinkOutlined/>
            {/* <StyledDot>.</StyledDot> */}
            <img src={Dot} alt="bullet"/>
            <StyledSubText>January 2021 - March 2021</StyledSubText>
            </OnlyFlex>
      </StyledContent>
      <EditOutlined style={{ fontSize: "20px", color: "#818181" }} />
      </OnlySpaceBetween> 
      <StyledInfo>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quasi facere veniam delectus. Labore ipsum maxime 
        consectetur. Ullam sint aspernatur dicta suscipit, repudiandae quos esse, consequuntur fuga quidem eveniet molestiae.
        </StyledInfo>
          <StyledSectionSeparator/>
          <OnlySpaceBetween>
        <StyledGenericText level={3}>Certificates</StyledGenericText>
        <PlusOutlined style={{ fontSize: "20px", color: "#818181" }} />
      </OnlySpaceBetween>
      <StyledContent>
          <OnlySpaceBetween>
            <StyledHeading level={4}>Certificate Name</StyledHeading>
            <EditOutlined style={{ fontSize: "20px", color: "#818181" }} />
          </OnlySpaceBetween>
          </StyledContent>
          <StyledContent>
          <OnlyFlex>
            <StyledSubText>Certificate credential</StyledSubText>
            <LinkOutlined />
            {/* <StyledDot>.</StyledDot> */}
            <img src={Dot} alt="bullet"/>
            <StyledSubText>July 2023 - September 2023</StyledSubText>
            </OnlyFlex>
          </StyledContent>
          <StyledInfo>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusantium architecto 
            omni
          </StyledInfo>
          <StyledSectionSeparator/>
          <OnlySpaceBetween>
        <StyledGenericText level={3}>Skills</StyledGenericText>
        <PlusOutlined style={{ fontSize: "20px", color: "#818181" }} />
      </OnlySpaceBetween>
          <StyledSkillsBg>
            <StyledEachSkill>Python</StyledEachSkill>
            <StyledEachSkill>c++</StyledEachSkill>
            <StyledEachSkill>Frontend Development</StyledEachSkill>
            <StyledEachSkill>Python</StyledEachSkill>
            <StyledEachSkill>Python</StyledEachSkill>
            <StyledEachSkill>Python</StyledEachSkill>
            <StyledEachSkill>abcde</StyledEachSkill>
            <StyledEachSkill>Python</StyledEachSkill>
            <StyledEachSkill>Python</StyledEachSkill>
            <StyledEachSkill>Python</StyledEachSkill>
            <StyledEachSkill>Python</StyledEachSkill>
          </StyledSkillsBg>    
    </StyledContentContainer>
  </StyledProfileBox>
);

export default Profile;

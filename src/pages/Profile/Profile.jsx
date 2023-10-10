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

const { Title, Text } = Typography;

const StyledProfileBox = styled.div`
  background-color: rgb(229, 227, 227);
  width: 70%;
  margin: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledTitle = styled(Title)`
  color: black;
`;

const StyledDownloadText = styled(Text)`
  color: rgb(152, 101, 232);
  text-decoration: underline;
`;

const StyledContentContainer = styled.div`
  background-color: white;
  width: 90%;
  margin: 16px auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  gap: 8px;
`;

const StyledAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 16px;
`;
const OnlyFlex = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
`;

const OnlyFlexCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const OnlySpaceBetween = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OnlyGap = styled.div`
  width: 100%;
  display: flex;
  gap:1rem;
  align-items: center;
`;

const StyledContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap:1rem;
  flex-grow: 1; /* Allow content to grow and occupy available space */
`;

const StyledSectionSeparator = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgb(232, 232, 232);
  margin-top: 16px; /* Add margin to separate sections */
`;

const StyledEditIcon = styled(FormOutlined)`
  font-size: 24px;
  color: rgb(129, 129, 129);
  cursor: pointer;
`;

const StyledGenericText = styled(Title)`
  font-size: 1.5rem;
  font-weight: 700;
`;

const StyledLocation = styled(Text)`
  font-size: 1.25rem;
  font-weight: 600;
  color: rgb(129, 129, 129);
`;

const StyledSubText = styled(Text)`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  color: rgb(129, 129, 129);
`;

const StyledDot = styled(Text)`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  color: rgb(129, 129, 129);
  display:flex;
  /* flex-direction:row; */
  align-items:center;
  justify-content:center;
`;

const StyledSubContent = styled(Text)`
  font-weight: 500;
`;

const StyledInfo = styled(Text)`
  font-weight: 400;
  color:rgb(107 114 128);
`;

const StyledHeading = styled(Text)`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledSkillsBg = styled.div`
 width: 100%;
  background-color: rgb(243, 236, 255);
  border-radius: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0.5rem;
`

const StyledEachSkill = styled(Text)`
background-color: #fff;
  font-weight: 400;
  border: 1px transparent;
  border-radius: 0.375rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: rgb(124, 69, 213);
  padding: 0.375rem;
  flex-grow: 1; 
  min-width: calc(25% - 1rem); 
  max-width: calc(25% - 1rem); 
  text-align: center;

`

const Profile = () => (
  <StyledProfileBox>
    <StyledHeader>
      <StyledTitle level={2}>My Profile</StyledTitle>
      <StyledDownloadText>Download Resume</StyledDownloadText>
    </StyledHeader>
    <StyledContentContainer>
      <StyledContent>
        <OnlyFlex>
          <StyledAvatar
            src="https://student-platform-assets.s3.ap-south-1.amazonaws.com/profile-pictures/36ee23beb4ed63a7f4513d8aae5e688d.jpeg"
            alt="Avatar"
          />
          <div>
            <StyledGenericText level={3}>Saumya Agarwal</StyledGenericText>
            <StyledLocation>Ghaziabad, Uttar Pradesh - 201017</StyledLocation>
          </div>
        </OnlyFlex>
        <EditOutlined style={{ fontSize: "20px", color: "#818181" }} />
      </StyledContent>
      <StyledSectionSeparator />
      <StyledGenericText level={3}>Contact Information</StyledGenericText>
      <StyledContent>
        <OnlySpaceBetween>
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
        </OnlySpaceBetween>
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
          <StyledContent>
            <StyledSubText>React Developer</StyledSubText>
            <LinkOutlined />
            <StyledDot>.</StyledDot>
            <StyledSubText>July 2023 - September 2023</StyledSubText>
          </StyledContent>
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
            <StyledHeading level={4}>Institute's Name</StyledHeading>
            <StyledDot>.</StyledDot>
            <StyledSubText>March 2018 - March 2020</StyledSubText>
      </StyledContent>
      <EditOutlined style={{ fontSize: "20px", color: "#818181" }} />
      </OnlySpaceBetween> 
      <StyledInfo>
        Grade : CGPA 80%
        </StyledInfo>
        <OnlySpaceBetween>
      <StyledContent>
            <StyledHeading level={4}>Institute's Name</StyledHeading>
            <StyledDot>.</StyledDot>
            <StyledSubText>March 2018 - March 2020</StyledSubText>
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
            <StyledHeading level={4}>Project Name</StyledHeading>
            <GithubOutlined/>
            <LinkOutlined/>
            <StyledDot>.</StyledDot>
            <StyledSubText>January 2021 - March 2021</StyledSubText>
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
            <StyledSubText>Certificate credential</StyledSubText>
            <LinkOutlined />
            <StyledDot>.</StyledDot>
            <StyledSubText>July 2023 - September 2023</StyledSubText>
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
            <StyledEachSkill>Python</StyledEachSkill>
            <StyledEachSkill>Python</StyledEachSkill>
            <StyledEachSkill>Python</StyledEachSkill>
            <StyledEachSkill>Python</StyledEachSkill>
          </StyledSkillsBg>
            
    </StyledContentContainer>
  </StyledProfileBox>
);

export default Profile;

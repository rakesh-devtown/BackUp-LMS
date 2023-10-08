import React from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';
import { FormOutlined ,GithubOutlined , LinkedinOutlined} from '@ant-design/icons';

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
`

const OnlyFlexCol = styled.div`
  display: flex;
  flex-direction:column;
  gap: 0.5rem;
`

const OnlySpaceBetween = styled.div`
width:100%;
  display: flex;
  justify-content:space-between;
  align-items:center;
`
const StyledContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
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

const StyledSubText= styled(Text)`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  color: rgb(129, 129, 129);
`;

const StyledSubContent= styled(Text)`
  font-weight: 500;
`;


const Profile = () => (
  <StyledProfileBox>
    <StyledHeader>
      <StyledTitle level={2}>My Profile</StyledTitle>
      <StyledDownloadText>Download Resume</StyledDownloadText>
    </StyledHeader>
    <StyledContentContainer>
      <StyledContent>
        <OnlyFlex>      
        <StyledAvatar src="https://student-platform-assets.s3.ap-south-1.amazonaws.com/profile-pictures/36ee23beb4ed63a7f4513d8aae5e688d.jpeg" alt="Avatar" />
      <div>
        <StyledGenericText level={3}>Saumya Agarwal</StyledGenericText>
        <StyledLocation>Ghaziabad, Uttar Pradesh - 201017</StyledLocation>
      </div>
      </OnlyFlex>
        <StyledEditIcon />
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
          <StyledSubContent><GithubOutlined /> <LinkedinOutlined /></StyledSubContent>
          </OnlyFlexCol>
          </OnlySpaceBetween>
        </StyledContent>
        <StyledSectionSeparator />
      {/* Add additional data for contact information here */}
    </StyledContentContainer>
  </StyledProfileBox>
);

export default Profile;

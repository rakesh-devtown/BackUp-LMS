import { Button, Collapse, List } from "antd";
import styled from "styled-components";

const CourseOverViewStyledDiv = styled.div`
  padding-top: 2rem;
  padding-left: 1rem;
  position: relative;
`;
const CourseOverviewModelOuterDiv = styled.div`
  position: relative;
  display: flex;
  background-color: ""; // You might want to specify a color here
  height: 350px;
  width:100%;

`;

const CourseOverviewModelInnerDiv = styled.div`
  position: absolute;
  top: -20px;
  left: 0px;
  width:100%;

`;

const CourseOverviewBackButton = styled.button`
  position: absolute;
  top: ${(props) => (props.width < 700 ? "-10px" : "-15px")};
  left: ${(props) => (props.width < 700 ? "-10px" : "-15px")};
  padding: 3px 12px;
  border: 1px solid #012353;
  border-radius: 4px;
  background-color: white;
  gap: 2px;
  color: black;
  font-size: 10px;
  font-weight: 600;
  line-height: 1.4;
  font-family: 'Manrope', sans-serif;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CourseOverviewPanel = styled(Collapse.Panel)`
  background: #f7f7f7; // Set a background color
  border-radius: 4px; // Add some border radius
  margin-bottom: 16px; // Add space between panels
`;

const CourseOverviewItem = styled(List.Item)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const CourseOverviewAttendanceStyledDiv = styled.div`
  display: flex;
  gap: 4px;
  justify-content: space-around;
  flex-direction: ${props => props.width <= 1284 ? 'column-reverse' : 'row'};
  align-items: ${props => props.width > 1284 ? '' : 'center'};
`;

const CourseOverviewContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CourseOverviewWeekContainer = styled.div`
  marginBottom: 12px; // Add space between cards
  display: flex;
  cursor: pointer;

`;

const CourseOverviewDayImage = styled.img`
  height: 11rem;
  border-radius: 0.375rem;
  width: 100%;
`;
const CourseOverviewResourceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 5px;
`;

const ResourceItem = styled.div`
  border-radius: 0.25rem;
  margin-top: 0.5rem;
`;

const ResourceButton = styled(Button)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  gap: 4px;
`;

const ResourceButtonPDF = styled(ResourceButton)`
  max-width: 200px;
`;

const ResourceText = styled.div`
  white-space: nowrap; // Keeps the text within a single line
  overflow: hidden; // Hides the text that overflows
  text-overflow: ellipsis; // Shows ellipsis (...) when the text overflows
`;

const NoResources = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-family: 'DM Sans';
  color: #797878;
  font-size: 1rem;
`;


const DayName = styled.p`
  cursor: pointer;
  font-weight: bold;
`;

const UpcomingPill = styled.div`
  background-color: #628CDF;
`;

const LivePill = styled.div`
  background-color: #10B981;
`;

const ExpiredPill = styled.div`
  background-color: #9CA3AF;
`;



export {
  CourseOverviewItem,
  CourseOverviewPanel,
  CourseOverViewStyledDiv,
  CourseOverviewModelOuterDiv,
  CourseOverviewModelInnerDiv,
  CourseOverviewBackButton,
  CourseOverviewAttendanceStyledDiv,
  CourseOverviewContainer,
  CourseOverviewWeekContainer,
  CourseOverviewDayImage,
  CourseOverviewResourceContainer,
  ResourceItem,
  ResourceButton,
  ResourceButtonPDF,
  ResourceText,
  NoResources,
  DayName, 
  UpcomingPill,
  LivePill,
  ExpiredPill

};

import { Button, Collapse, List } from "antd";
import styled from "styled-components";

const CourseOverViewStyledDiv = styled.div`
  padding-top: 2rem;
  padding-left: ${(props) => (props.activeTab === "tab3" ? "1rem" : "3rem")};
  position: relative;
`;
const CourseOverviewModelOuterDiv = styled.div`
  position: relative;
  display: flex;
  background-color: ""; // You might want to specify a color here
  height: 350px;
  padding: 15px;
`;

const CourseOverviewModelInnerDiv = styled.div`
  position: absolute;
  top: -20px;
  left: -24px;
`;

const CourseOverviewBackButton = styled(Button)`
  position: absolute;
  top: ${(props) => (props.width < 700 ? "-10px" : "-15px")};
  left: ${(props) => (props.width < 700 ? "-10px" : "-15px")};
  padding: "";
  background-color: #001529;
`;

const CourseOverviewPanel = styled(Collapse.Panel)`
  background: #f7f7f7; // Set a background color
  border-radius: 4px; // Add some border radius
  margin-bottom: 16px; // Add space between panels
`;

const CourseOverviewItem = styled(List.Item)`
  display: flex;
  justify-content: space-between;
  width: 30rem;
`;

const CourseOverviewAttendanceStyledDiv = styled.div`
  display: flex;
  gap: 4px;
  justify-content: space-around;
  flex-direction: ${props => props.width <= 1284 ? 'column-reverse' : 'row'};
  align-items: ${props => props.width > 1284 ? '' : 'center'};
`;

export {
  CourseOverviewItem,
  CourseOverviewPanel,
  CourseOverViewStyledDiv,
  CourseOverviewModelOuterDiv,
  CourseOverviewModelInnerDiv,
  CourseOverviewBackButton,
  CourseOverviewAttendanceStyledDiv
};

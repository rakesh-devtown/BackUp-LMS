import { Button } from "antd";
import styled from "styled-components";

const VideoDetailBackButton = styled(Button)`
  position: absolute;
  top: ${props => props.width < 700 ? '-8px' : '-15px'};
  left: ${props => props.width < 700 ? '-10px' : '-15px'};
  padding: "";
  background-color: #001529;
`;
const VimeoContainer = styled.div`
  width: ${props => props.width < 764 ? '100%' : 'initial'};
`;
const ThumbnailImage = styled.img`
  max-width: 1100px;
  overflow: hidden;
  width: 100%;
`;


export {ThumbnailImage ,  VideoDetailBackButton,VimeoContainer}
import { Button } from "antd";
import styled from "styled-components";

const VideoDetailBackButton = styled.button`
  position: absolute;
  top: ${props => props.width < 700 ? '-8px' : '-15px'};
  left: ${props => props.width < 700 ? '-10px' : '-15px'};
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
const VimeoContainer = styled.div`
  width: ${props => props.width < 764 ? '100%' : 'initial'};
`;
const ThumbnailImage = styled.img`
  max-width: 1100px;
  overflow: hidden;
  width: 100%;
`;


export {ThumbnailImage ,  VideoDetailBackButton,VimeoContainer}
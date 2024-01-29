import { Button } from 'antd';
import styled from 'styled-components';

const DateSelectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const ModalLabel = styled.p`
  font-weight: 600;
  margin-top: 20px;
  margin-left: 4px;
  margin-bottom: 8px;
`;
const ModalTextArea = styled.textarea`
  width: 100%;
  padding: 10px 12px;
  margin-top: 10px;
  background-color: #F8F8FA;
  color: gray;
  border: 1px solid;
  border-radius: 4px;
  outline: none;
  box-shadow: none;
`;

const ModalButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 12px;
`;
const ModalSaveButton = styled(Button)`
  border: 1px solid black;
`;

const ModalDeleteButton = styled(Button)`
    border: 1px solid black;
    color: red;
`;
const Important = styled.span`
  color: #FF0000;
`;

const ModalFormContainer = styled.div`
  margin-bottom: 40px;
  width: 100%;
  padding: 0 12px;
  color: #747474;
`;


const DNDContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;
  height: 100%;
  margin-bottom: 0.5rem;
  
`;

const DashedContainer = styled.div`
  border: 2px dashed red;
  margin: 1rem;
  border-radius: 0.375rem;
  padding: 0.5rem;
  background-color: #FEE2E2;
  text-align: center;
  font-weight: 600;
`;
const PresentLabel = styled.label`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: 8px;
`;

const DNDInnerContainer = styled.div`
  border: 2px dashed;
  padding: 6rem;
  background-color: ${props => props.isDragActive ? '#E5E7EB' : '#FFFFFF'};
`;

const DNDButton = styled(Button)`
  
  margin-left: 0.5rem;
`;

const AboutMeMargin = styled.div`
  margin-top: 24px;
`;

export { DateSelectContainer 
    , ModalLabel ,
    ModalTextArea ,
    ModalButtonContainer ,
    ModalSaveButton ,
    ModalDeleteButton , 
    ModalFormContainer ,
    Important ,
    PresentLabel, 
    DashedContainer ,
    DNDContainer ,
    DNDInnerContainer ,
    DNDButton ,
    AboutMeMargin


};
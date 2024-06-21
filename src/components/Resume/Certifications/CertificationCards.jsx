import { Button, Space } from 'antd';
import { EditOutlined, SearchOutlined, UploadOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { GoDotFill } from 'react-icons/go';
import useWindowSize from '../../../hooks/useWindowSize';
import { CardContainer, CardInner, DotStyle } from '../../../styles/myResume.styles';
import useResumeStore from '../../../store/resumeStore';

const CertificationCard = ({ icon }) => {
  const { width } = useWindowSize();
  const [showModal, setShowModal] = useState(false);

const CertificationCard = ({ icon, title, orgName, credId , month, year, url}) => {

    const { width } = useWindowSize();
   

    return (
        <CardContainer width={width}>
            <div>
                <img src={icon} alt="logo" style={{width:'60px', height:'60px'}}/>
            </div>
            <CardInnerVariant width={width}>
                <Space size={2} direction="vertical">
                    <h5>{title}</h5>
                    <Space size={6} align='start' >
                        <p>{orgName}</p>
                        <DotStyle><GoDotFill /></DotStyle>
                        <p><span>{month}</span>{" "}<span>{year}</span></p>
                    </Space>
                    <p>Credential Id {credId}</p>
                    
                        <Button  onClick={()=>{
                            window.open(url, "_blank")
                        }} icon={<UploadOutlined />} iconPosition="end" shape='round' size='large'>Show Credential</Button>
                    
                </Space>
                <Button type="text" danger icon={<EditOutlined />} size="large" className='edit-btn'>Edit</Button>
            </CardInnerVariant>
        </CardContainer>
    )
}

  return (
    <CardContainer width={width}>
      {showModal && (
        <ResumeModals
          handleCancel={handleShowModal}
          keyItem={"certification"}
          value={{}}
        />
      )}
      <div>
        <img src={icon} alt="logo" />
      </div>
      <CardInnerVariant width={width}>
        <Space size={2} direction="vertical">
          <h5>Google UX Design Professional Certification</h5>
          <Space size={6} align="start">
            <p>Coursera</p>
            <DotStyle>
              <GoDotFill />
            </DotStyle>
            <p>Jan 2024</p>
          </Space>
          <p>Credential Id 4s65d4f54sdf545s4f543s54f64f</p>
          <ConfigProvider
            theme={{
              components: {
                Button: {
                  colorPrimary: "white",
                  primaryColor: "#61738e",
                  colorPrimaryHover: "#1E6DE8",
                },
              },
            }}
          >
            <Button
              icon={<UploadOutlined />}
              type="primary"
              iconPosition="end"
              shape="round"
              size="large"
            >
              Show Credential
            </Button>
          </ConfigProvider>
        </Space>
        <Button
          type="text"
          danger
          icon={<EditOutlined />}
          size="large"
          className="edit-btn"
          onClick={handleShowModal}
        >
          Edit
        </Button>
      </CardInnerVariant>
    </CardContainer>
  );
};

const CardInnerVariant = styled(CardInner)`
  .ant-space-item button {
    margin-top: 16px;
    border-color: #61738e;
  }
`;

export default CertificationCard;

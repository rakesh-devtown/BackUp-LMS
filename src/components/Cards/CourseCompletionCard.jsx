import { ArrowUpOutlined, CloseOutlined } from "@ant-design/icons";
import { Button, Col, Modal, Progress, Space } from "antd";
import { useEffect, useState } from "react";
import styled from "styled-components";
import CertificateDownloadModal from "../Modals/CertificationModal";
import useWindowSize from "../../hooks/useWindowSize";
import useBatchStore from "../../store/batchStore";

const CourseCompletionCard = ({ data, completed, bgColor, isStudentMigrated,batch }) => {
  const [showCertificate, setShowCertificate] = useState(false);
  const [certificateData, setCertificateData] = useState({});
  const [percentage, setPercentage] = useState(0);
  const { width } = useWindowSize();
  const { generateMigrateCertificate } = useBatchStore();

  const { name, description, bannerImg } = data;
  const handleModal = (data) => {
    //console.log(data)
    setCertificateData(data?.studentCertificates?.length > 0 ? data?.studentCertificates[0] : {});
    setShowCertificate(true);
  };

  const calculatePercentage = () => {
    const percent = parseInt(parseInt(parseInt(data?.totalSectionProgress) / parseInt(data?.totalSectionItems)) * 100);
    let progress = parseInt(data?.totalSectionProgress) / parseInt(data?.totalSectionItems);
    progress = progress * 100;

    setPercentage(Math.min(parseInt(progress), 100));
  };

  const migrateCertificatesHandler = async() => {
    try{
      await generateMigrateCertificate(batch?.id);
    }catch(err){
    }
  }

  useEffect(() => {
    if (data) {
      calculatePercentage();
    }
  }, []);

  return (
    <>
      {/* open certificate modal for edit,download, and share */}
      <Modal
        open={showCertificate}
        onCancel={() => {
          setShowCertificate(false);
        }}
        footer={false}
        centered={true}
        width={width > 1200 ? 1097 : width >= 768 ? 700 : 397}
      >
        <CertificateDownloadModal data={certificateData} />
      </Modal>

      {(percentage < 100 || completed || isStudentMigrated) && (
        <Col span={24} md={12}>
          <StyledCard bgColor={bgColor}>
            <MainCard width={width}>
            { isStudentMigrated && <CustomButton onClick={migrateCertificatesHandler} type="default">Get Certificate</CustomButton>}
              <Space size={29}>
                <img src={bannerImg} className=" max-w-20 max-h-20" alt="icon" />
                <h4>{String(name).length > 30 ? String(name).substring(0, 30) + "..." : name}</h4>
              </Space>
              <hr />
              <div>
                <p>{String(description)?.length > 60 ? String(description).substring(0, 60) + "..." : description}</p>
              </div>
            </MainCard>

            {/* hidden element shown on hovered*/}
            <div className="hidden-card">
              {completed ? (
                <>
                  {data &&
                    data?.versions &&
                    data?.versions[0]?.certificates?.map((certificate, index) => (
                      <div className="completed" onClick={handleModal.bind(this, certificate)}>
                        <p>{certificate?.name}</p>
                        <i>
                          <ArrowUpOutlined rotate={45} />
                        </i>
                      </div>
                    ))}
                </>
              ) : (
                <>
                  <div className="ongoing">
                    <p>Course Contents</p>
                    <p className="percentage-completion">{percentage}% Completed</p>
                  </div>
                  <Progress percent={percentage} showInfo={false} trailColor="white" strokeColor={bgColor} />
                </>
              )}
            </div>
          </StyledCard>
        </Col>
      )}
    </>
  );
};

const CustomButton= styled(Button)`
position: absolute;
top: 10px;
right: 15px;
/* width: fit-content; */
/* margin-left: auto; */
`
const StyledCard = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  font-family: "DM Sans";
  text-transform: capitalize;
  border-radius: 6.137px;
  box-shadow: 0px 0px 8.49px 0px rgba(151, 151, 151, 0.37);
  border-bottom-width: 7px;
  border-bottom-style: solid;
  border-color: ${(props) => (props.bgColor ? props.bgColor : "#E7B11F")};
  max-width: 600px;
  //styling for the hidden div
  .hidden-card {
    display: none;
    padding: 14px 0px;
    flex-direction: column;

    font-family: Inter;
    font-size: 14.4px;
    font-style: normal;
    font-weight: 600;
    line-height: 25.6px;
    letter-spacing: -0.144px;

    background-color: ${(props) => (props.bgColor ? props.bgColor : "#E7B11F")};
    color: white;
    .completed,
    .ongoing {
      font-size: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 6px 16px;
      transition: all 0.3s;
    }
    .completed {
      cursor: pointer;
      /* &:hover{
                background-color: #808080a1;
            } */
    }
    i {
      display: grid;
      place-items: center;
      background-color: #ffffff55;
      border-radius: 50%;
      height: 30px;
      width: 30px;
    }
  }
  &:hover .hidden-card {
    display: flex;
  }
  .percentage-completion {
    font-size: 14px;
    font-weight: 400;
  }
  .ant-progress-bg {
    opacity: 50%;
  }
  .ant-progress {
    padding: 0 20px;
  }
`;

const MainCard = styled.div`
  display: flex;
  position: relative;
  justify-content: end;
  flex-direction: column;
  overflow-y: auto;
  padding: ${(props) => (props.width >= 768 ? " 0 16px 20px 16px" : "52px 16px 20px 16px")};
  height: ${(props) => (props.width >= 768 ? "208px" : null)};
  .ant-space {
    overflow-y: auto;
  }
  h4 {
    max-height: 115px;
    color: #171717;
    font-size: 22.912px;
    font-weight: 700;
  }
  hr {
    height: 0.511px;
    color: #5c8dbc;
    margin: 11.46px;
  }
  p {
    color: var(--Neutral-Colors-800, #19213d);
    font-size: 14.729px;
    font-weight: 400;
    width: 300px;
  }
`;

export default CourseCompletionCard;

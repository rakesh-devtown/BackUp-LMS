import React, { useCallback, useContext, useEffect, useState } from "react";
import { Collapse, notification } from "antd";
import styled from "styled-components";
import { Typography } from "antd";
import {
  RightOutlined,
  EyeOutlined,
  CodeSandboxCircleFilled,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { Button, Space } from "antd";

import Dropdown from "./Dropdown";
import Vimeo from "@u-wave/react-vimeo";
import { useLocation, useNavigate } from "react-router-dom";
import useBatchStore from "../../store/batchStore";
import { serviceGet, servicePost, servicePut } from "../../utils/api";
import { setHeader } from "../../utils/header";
import CertificateDropDown from "../../components/courses/CertficateDropDown";
import useAuthStore from "../../store/authStore";
import useWindowSize from "../../hooks/useWindowSize";
import {
  ThumbnailImage,
  VideoDetailBackButton,
  VimeoContainer,
} from "../../styles/videoDetail.styles";
import useLoadingStore from "../../store/loadingStore";
import axios from "axios";
const { Title, Text } = Typography;

const StyledVideoBox = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: ${(props) => (props.width > 764 ? "start" : "")};
  padding: 0;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const StyledLeft = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${(props) => (props.width < 764 ? "100%" : "")};
`;
const StyledRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const StyledHeading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column; /* Change to column layout */
    justify-content: flex-start; /* Center horizontally */
  }

  /* Optional: Add flex-wrap property to allow content to wrap */
  @media (max-width: 768px) {
    flex-wrap: nowrap;
  }
`;

const StyledHeadingSubPart = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`;
const StyledVideoTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const StyledText = styled(Text)`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
  @media (max-width: 768px) {
    font-weight: 400;
    font-size: 1.125rem;
  }
`;

const StyledVideoTitleText = styled(Text)`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
  width: 100%;
  @media (max-width: 768px) {
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /* display:flex; */
  /* justify-content:flex-start; */
  /* align-items: center; */
`;

const OnlySpaceBetween = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledProgramsText = styled(Text)`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
  color: rgb(163 162 162);
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    display: none;
  }
`;

const StyledCourseText = styled(Text)`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
  color: rgb(163 162 162);
  padding: 1rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSubText = styled(Text)`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  color: rgb(129, 129, 129);
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const VideoDetail = () => {
  const navigate = useNavigate();
  const { width } = useWindowSize();
  const currentBatchId = useBatchStore((state) => state.currentBatchId);
  const currentBatch = useBatchStore((state) => state.currentBatch);
  const [course, setCourse] = useState({});
  const currentVideoDetails = useBatchStore(
    (state) => state.currentVideoDetails
  );
  const currentVideo = useBatchStore((state) => state.currentVideo);
  const setCurrentVideo = useBatchStore((state) => state.setCurrentVideo);
  const getVideo = useBatchStore((state) => state.getVideo);
  const getCurrentBatch = useBatchStore((state) => state.getCurrentBatch);
  const setCurrentSection = useBatchStore((state) => state.setCurrentSection);
  const section = useBatchStore((state) => state.section);
  const user = useAuthStore((state) => state.user);
  const loadUser = useAuthStore((state) => state.loadUser);
  const [certificateData, setCertificateData] = useState({});
  const setLoading = useLoadingStore((state) => state.setLoading);
  const [certificates, setCertificates] = useState({});
  const [open, setOpen] = useState(false);
  const sections = useBatchStore((state) => state.sections);
  const setSection = useBatchStore((state) => state.setSection);
  const [ready, setReady] = useState(false);
  const [updateProfile, setupdateProfile] = useState({
    //state to store name and update after course completion
    firstName: user?.firstName,
    lastName: user?.lastName,
  });
  const {
    state: { thumbnail },
  } = useLocation();
  let progress;

  if (sections && sections.length > 0 && section) {
    progress = sections?.filter((e) => e._id === section._id)[0];
  }
  const isPresent = progress?.progress?.videos.includes(
    currentVideoDetails._id
  );


  const handleSubmit = async (e) => {


    try {
      setLoading(true);
      setHeader("auth", `bearer ${localStorage.getItem("token")}`);
      const {
        success,
        data: { student },
        message,
      } = await servicePut("student/student-api/v1/me/update", updateProfile, axios.defaults.headers.common);

      if (success) {
        setReady(true); // Update the ready state if the request was successful
        notification.success({
          message: "Course Completed Successfully ",
        });
        setupdateProfile({
          firstName: student?.firstName,
          lastName: student?.lastName,
          ...updateProfile,
        });
        setHeader("auth", `bearer ${localStorage.getItem("token")}`);

        const { data, success, message } = await servicePost(
          `student/student-api/v1/video/progress`,
          {
            section: section._id,
            batch: currentBatch._id,
            video: currentVideoDetails._id,
            viewed: true,
            cc: true,
          }
        );
        const { tracker } = data;
        setSection(tracker);
        await loadUser();
        setOpen(false);
      } else {
        notification.error({
          message: "Error",
          description: message,
        });
      }
    } catch (error) {
      notification.error({
        message: "Error in updating profile details",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };
  async function handleGetCourseData() {
    if (!currentBatchId) {
      navigate("/programs");
      return;
    }

    if (!currentBatch.course) {
      navigate("/programs");
      return;
    }
    setCourse(currentBatch?.course[0]);
    setSection(currentBatch?.course[0]?.sections);
  }
  // Get Certificate

  const getCert = async () => {
    try {
      setLoading(true)
      setHeader("auth", `bearer ${localStorage.getItem("token")}`);
      const { data, success, message } = await serviceGet(
        `student/student-api/v1/video/certificate?batchId=${currentBatch._id}`
      );

      setCertificates(data.certificates);
    } catch (error) {

    } finally {
      setLoading(false)
    }
  };

  // Mark video as watched
  const onWatched = async (e) => {
    const lastSection = sections[sections.length - 1];
    const lastVideo = lastSection.videos[lastSection.videos.length - 1];

    try {
      // check if course has been completed or not
      setLoading(true)
      let cc = false;
      if (currentVideoDetails._id == lastVideo._id) {
        if (!lastSection.progress) {
          // check if there's just one video in section
          if (lastSection.videos.length === 1) {
            cc = true;
          }
        } else {
          if (
            lastSection.videos.length - 1 ===
            lastSection.progress.videos.length
          ) {
            cc = true;
          }
        }
      }
      if (cc) {
        setOpen(true);
        notification.success({
          message: "Success",
          description:
            "Congratulations on completing the course, check your inbox for certificate",
        });
      }

      // if course is not completed or name is updated successfully and course is completed then update the progress
      else if (!cc || (cc && ready)) {

        setHeader("auth", `bearer ${localStorage.getItem("token")}`);
        const { data, success, message } = await servicePost(
          `student/student-api/v1/video/progress`,
          {
            section: section._id,
            batch: currentBatch._id,
            video: currentVideoDetails._id,
            viewed: true,
            cc, //change in case certificate needs to be released
          }
        );
        if (success) {
          const { tracker } = data;
          setSection(tracker);

        } else {
          notification.error({
            message: "Error",
            description: message,
          });
        }
        getCurrentBatch(currentBatchId);
        // get certificate after name is updated and course is completed
        if (cc && ready) getCert();
      }
    } catch (error) {
      notification.error({
        message: "Error",
        description: error.message,
      });

    } finally {
      setLoading(false)
    }
  };
  const handleGetVideo = useCallback(async () => {
    if (currentVideo._id) {
      try {
        setLoading(true);
        await getVideo(currentVideo._id);
      } catch (error) {

      } finally {

        setLoading(false);
      }
    }
  }, [currentVideo._id, getVideo]);


  useEffect(() => {
    handleGetCourseData();
  }, [currentBatch]);
  useEffect(() => {
    handleGetVideo();
  }, [handleGetVideo]);

  useEffect(() => {
    getCert();
  }, [currentBatch._id]);
  return (
    <>
      <CertificateDropDown
        handleSubmit={handleSubmit}
        open={open}
        setOpen={setOpen}
        updateProfile={updateProfile}
        setupdateProfile={setupdateProfile}
        setCertificateData={setCertificateData}
      />
      <StyledVideoBox width={width}>
        {width < 1024 && (
          <VideoDetailBackButton
            width={width}
            type="primary"
            onClick={() => navigate("/programs")}
          >
            <ArrowLeftOutlined /> Back
          </VideoDetailBackButton>
        )}
        <StyledLeft width={width}>
          <StyledHeading>
            <StyledHeadingSubPart>
              <StyledProgramsText onClick={() => navigate("/programs")}>
                My Programs
              </StyledProgramsText>
              <StyledProgramsText>
                <RightOutlined />
              </StyledProgramsText>
              <StyledText>{course.name}</StyledText>
            </StyledHeadingSubPart>
          </StyledHeading>

          <StyledVideoTitle>
            <StyledVideoTitleText>{currentVideo.name} </StyledVideoTitleText>
            {
              currentVideo.name && (
                <>
                  {isPresent ? (
                    <Button
                      type="primary"
                      style={{ cursor: "not-allowed" }}
                      icon={<EyeOutlined />}
                    >
                      Marked as Watched
                    </Button>
                  ) : (
                    <Button onClick={onWatched} type="primary" icon={<EyeOutlined />}>
                      Mark as Watched
                    </Button>
                  )}
                </>
              )
            }

          </StyledVideoTitle>

          <VimeoContainer>
            {currentVideoDetails.player_link ? (
              <Vimeo
                video={currentVideoDetails?.player_link}
                width={700}
                height={450}
                responsive={true}
                onEnd={onWatched}
              />
            ) : (
              <ThumbnailImage src={thumbnail} alt="thumbnail" />
            )}
          </VimeoContainer>

          <StyledHeading>
            <StyledText>Course Overview</StyledText>
          </StyledHeading>

          <StyledSubText>
            {currentBatch &&
              currentBatch.course &&
              currentBatch.course.length > 0 &&
              currentBatch.course[0].name}
          </StyledSubText>
        </StyledLeft>
        <StyledRight>
          <StyledCourseText>Course Content</StyledCourseText>

          <Dropdown
            isPresent={isPresent}
            data={course.sections}
            certificates={certificates}
          />
        </StyledRight>
      </StyledVideoBox>
    </>
  );
};
export default VideoDetail;

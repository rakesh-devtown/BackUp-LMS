import { Flex, Modal, notification } from "antd";
import React, { useEffect, useState } from "react";
import { serviceGet, servicePut } from "../../utils/api";
import { setHeader } from "../../utils/header";
import useAuthStore from "../../store/authStore";
import {
  CloseCircleFilled,
  CodeFilled,
  CodeTwoTone,
  DeliveredProcedureOutlined,
  GithubFilled,
} from "@ant-design/icons";
import NewModal from "./NewModal";
import ProfileModal from "./ProfileModal";
import useWindowSize from "../../hooks/useWindowSize";

import blog from "../../assets/images/blog-svgrepo-com.svg";
import leetcode from "../../assets/images/leetcode-svgrepo-com.svg";
import codechef from "../../assets/images/codechef-svgrepo-com.svg";
import codeforces from "../../assets/images/brand-codeforces-svgrepo-com.svg";

import {
  AboutMeAddress,
  AboutMeContactContainer,
  AboutMeContactText,
  AboutMeContainer,
  AboutMeEmail,
  AboutMeGridContainer,
  AboutMeImage,
  AboutMeInnerContainer,
  AboutMeLink,
  AboutMeLinkContainer,
  AboutMeLinkText,
  AboutMeLinkWrapper,
  AboutMeNameHeading,
  AboutMeOuterContainer,
  AboutMePhone,
  AboutMeSubContainer,
  AboutMeText,
  AboutMeUploadContainer,
  AboutMeUploadLabel,
  AboutModalContainer,
  AboutModalText,
  CloseIcon,
  ProfileNameContainer,
} from "../../styles/ProfileComponents/aboutme.styles";
import { AboutMeMargin } from "../../styles/Modals/sharedModals.styles";
import { AboutMeSectionDivider } from "../../styles/shared.styles";
import useLoadingStore from "../../store/loadingStore";

function AboutMe({ profile, about }) {
  const { width } = useWindowSize();
  const setLoading = useLoadingStore((state) => state.setLoading);
  const loadUser = useAuthStore((state) => state.loadUser);
  const [imageProfile, setImageProfile] = useState({
    firstName: profile?.firstName,
    lastName: profile?.lastName,
    mobile: profile?.mobile,
    image: profile?.image,
    email: profile?.email,
    resume: profile?.resume,
    githubLink: profile?.githubLink,
    blogLink: profile?.blogLink,
    leetCode: profile?.leetCode,
    codeChef: profile?.codeChef,
    codeForce: profile?.codeForce,
    address: {
      city: profile?.address?.city,
      pincode: profile?.address?.pincode,
      state: profile?.address?.state,
    },
  });
  // check if extra details exist then only display the link if it exists
  const linkExists =
    profile?.githubLink ||
    profile?.blogLink ||
    profile?.leetCode ||
    profile?.codeChef ||
    profile?.codeForce;
  //   const dispatch = useDispatch();
  //function to upload the image
  const handleImageUpload = async (e) => {
    e.preventDefault();
    // dispatch(setLoadingTrue());
    try {
      const file = e.target.files[0];
      if (e.target.files[0].type.split("/")[0] !== "image") {
        notification.error({
          message: "Only Images allowed",
        });

        // toast.error("Only Images allowed");
        return;
      }
      const type = "." + e.target.files[0].type.split("/")[1];
      //gets the url from AWS
      setLoading(true)
      setHeader("auth", `bearer ${localStorage.getItem("token")}`);
      const { url } = await serviceGet(
        `student/student-api/v1/me/url?type=${type}&path=/profile-pictures`
      );
      //PUT request on the URL which we got from AWS
      await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: file,
      });

      const imageUrl = url.split("?")[0];

      //make a PUT request now to change the image link of the URL which we got from AWS and new image link of AWS will be updated
      setHeader("auth", `bearer ${localStorage.getItem("token")}`);

      const {
        success,
        data: { student },
        message,
      } = await servicePut("student/student-api/v1/me/update-profile-picture", {
        url: imageUrl,
      });

      if (success) {
        // toast.success("Profile picture updated");
        setImageProfile({
          ...imageProfile,
          image: student?.image,
        });

        loadUser();
        // dispatch(loadUser());
        await about();
      } else {
        notification.error({
          message: "Error in updating profile picture",
          description: message,
        });
        // toast.error("Error in updating profile picture");
      }
    } catch (error) {
      notification.error({
        message: "Error in updating profile picture",
        description: error.message,
      });
      //   toast.error("Error in updating profile picture");
    } finally {
      setLoading(false)
      //   dispatch(setLoadingFalse());
    }
  };

  //uploads the resume and updates the new resume in the backend which was added
  const handlePdfUpload = async (e) => {
    e.preventDefault();
    // dispatch(setLoadingTrue());
    // toast.success("Hold short while we upload your file!");
    const file = e.target.files[0];
    const type = "." + file.type.split("/")[1];
    setHeader("auth", `bearer ${localStorage.getItem("token")}`);
    if (type === ".pdf") {
      try {
        setLoading(true)
        const { url } = await serviceGet(
          `student/student-api/v1/me/url?type=${type}&path=/student-resume`
        );
        await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: file,
        });

        const pdfUrl = url.split("?")[0];
        setHeader("auth", `bearer ${localStorage.getItem("token")}`);
        const {
          success,
          data: { student },
          message,
        } = await servicePut(
          "student/student-api/v1/me/update-resume",
          // pass the pdfurl as url in body
          {
            url: pdfUrl,
          }
        );

        if (success) {
          // toast.success(message);
          setImageProfile({
            ...imageProfile,
            resume: student?.resume,
          });
          loadUser();
          //   dispatch(loadUser());
          await about();
        } else {
          notification.error({
            message: "Error in updating resume",
            description: message,
          });
          //   toast.error("Issue in uploading and updating the resume");
        }
      } catch (error) {
        notification.error({
          message: "Error in updating resume",
          description: error.message,
        });
        // toast.error("Issue in uploading and updating the resume");
      } finally {
        setLoading(false)
        // dispatch(setLoadingFalse());
      }
    } else {
      notification.error({
        message: "Please upload only a pdf file format",
      });
      //   toast.error("Please upload only a pdf file format");
    }
  };

  const [open, setopen] = useState(false);
  useEffect(() => {
    if (profile && !profile?.profileComplete) {
      setopen(true);
    }
  }, [profile]);
  return (
    <AboutMeGridContainer>
      <AboutMeInnerContainer>
        {profile && profile.profileComplete ? (
          <div>
            <Flex justify="space-between" align="center">
              {/* https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" */}
              <ProfileNameContainer width={width}>
                <>
                  <label htmlFor="desktop-upload">
                    <AboutMeImage
                      src={
                        profile?.image
                          ? profile?.image
                          : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                      }
                    />
                  </label>
                  <input
                    accept="image/*"
                    onChange={handleImageUpload}
                    id="desktop-upload"
                    style={{ display: "none" }}
                    type="file"
                  />
                </>
                <div>
                  <AboutMeNameHeading>
                    {profile?.firstName + " " + profile?.lastName}
                  </AboutMeNameHeading>
                  <AboutMeAddress>
                    {profile?.address?.city + ", " + profile?.address?.state}
                  </AboutMeAddress>
                </div>
              </ProfileNameContainer>

              <AboutMeMargin>
                <NewModal about={about} text="Prof" mainSub="Edit User">
                  <ProfileModal student={profile} />
                </NewModal>
              </AboutMeMargin>
            </Flex>

            <AboutMeSectionDivider />
            <AboutMeOuterContainer>
              <AboutMeContactContainer>
                <AboutMeContactText>Contact Information</AboutMeContactText>
              </AboutMeContactContainer>
              <AboutMeContainer width={width}>
                <AboutMeSubContainer>
                  <AboutMeText>Email address</AboutMeText>
                  <AboutMeEmail title={profile?.email}>
                    {profile?.email}
                  </AboutMeEmail>
                </AboutMeSubContainer>
                <AboutMeSubContainer>
                  <AboutMeText>Phone number</AboutMeText>
                  <AboutMePhone>{profile?.mobile}</AboutMePhone>
                </AboutMeSubContainer>
                <AboutMeUploadContainer>
                  <input
                    id="file-upload"
                    type="file"
                    accept="application/pdf"
                    style={{ display: "none" }}
                    onChange={handlePdfUpload}
                  />
                  <AboutMeUploadLabel htmlFor="file-upload">
                    {profile?.resume ? "Update Resume" : "Add Resume"}
                  </AboutMeUploadLabel>
                </AboutMeUploadContainer>
              </AboutMeContainer>

              {linkExists && (
                <AboutMeLinkContainer>
                  <AboutMeLinkText>Extra details</AboutMeLinkText>
                  <AboutMeLinkWrapper>
                    {profile?.githubLink && (
                      <AboutMeLink href={profile.githubLink} target="_blank">
                        <GithubFilled size={28} />
                      </AboutMeLink>
                    )}
                    {profile?.blogLink && (
                      <AboutMeLink href={profile.blogLink} target="_blank">
                        {/* <DeliveredProcedureOutlined size={28} /> */}
                        <img src={blog} height="20px" width="20px" alt="" />
                      </AboutMeLink>
                    )}
                    {profile?.leetCode && (
                      <AboutMeLink href={profile.leetCode} target="_blank">
                        <img src={leetcode} height="20px" width="20px" alt="" />
                      </AboutMeLink>
                    )}
                    {profile?.codeChef && (
                      <AboutMeLink href={profile.codeChef} target="_blank">
                        <img src={codechef} height="20px" width="20px" alt="" />
                      </AboutMeLink>
                    )}
                    {profile?.codeForce && (
                      <AboutMeLink href={profile.codeForce} target="_blank">
                        <img
                          src={codeforces}
                          height="20px"
                          width="20px"
                          alt=""
                        />
                      </AboutMeLink>
                    )}
                  </AboutMeLinkWrapper>
                </AboutMeLinkContainer>
              )}
            </AboutMeOuterContainer>

            <AboutMeSectionDivider />
          </div>
        ) : (
          <div>
            <Flex justify="space-between" align="center">
              {/* https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" */}
              <ProfileNameContainer width={width}>
                <>
                  <label htmlFor="desktop-upload">
                    <AboutMeImage
                      src={
                        profile?.image
                          ? profile?.image
                          : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                      }
                    />
                  </label>
                  <input
                    accept="image/*"
                    onChange={handleImageUpload}
                    id="desktop-upload"
                    style={{ display: "none" }}
                    type="file"
                  />
                </>
                <div>
                  <AboutMeNameHeading>
                    {profile?.firstName + " " + profile?.lastName}
                  </AboutMeNameHeading>
                  <AboutMeAddress>
                    {profile?.address?.city + ", " + profile?.address?.state}
                  </AboutMeAddress>
                </div>
              </ProfileNameContainer>

              <AboutMeMargin>
                <NewModal about={about} text="Prof" mainSub="Edit User">
                  <ProfileModal student={profile} />
                </NewModal>
              </AboutMeMargin>
            </Flex>

            <AboutMeSectionDivider />
            <AboutMeOuterContainer>
              <AboutMeContactContainer>
                <AboutMeContactText>Contact Information</AboutMeContactText>
              </AboutMeContactContainer>
              <AboutMeContainer width={width}>
                <AboutMeSubContainer>
                  <AboutMeText>Email address</AboutMeText>
                  <AboutMeEmail title={profile?.email}>
                    {profile?.email}
                  </AboutMeEmail>
                </AboutMeSubContainer>
                <AboutMeSubContainer>
                  <AboutMeText>Phone number</AboutMeText>
                  <AboutMePhone>{profile?.mobile}</AboutMePhone>
                </AboutMeSubContainer>
                <AboutMeUploadContainer>
                  <input
                    id="file-upload"
                    type="file"
                    accept="application/pdf"
                    style={{ display: "none" }}
                    onChange={handlePdfUpload}
                  />
                  <AboutMeUploadLabel htmlFor="file-upload">
                    {profile?.resume ? "Update Resume" : "Add Resume"}
                  </AboutMeUploadLabel>
                </AboutMeUploadContainer>
              </AboutMeContainer>

              {linkExists && (
                <AboutMeLinkContainer>
                  <AboutMeLinkText>Extra details</AboutMeLinkText>
                  <AboutMeLinkWrapper>
                    {profile?.githubLink && (
                      <AboutMeLink href={profile.githubLink} target="_blank">
                        <GithubFilled size={28} />
                      </AboutMeLink>
                    )}
                    {profile?.blogLink && (
                      <AboutMeLink href={profile.blogLink} target="_blank">
                        {/* <DeliveredProcedureOutlined size={28} /> */}
                        <img src={blog} height="20px" width="20px" alt="" />
                      </AboutMeLink>
                    )}
                    {profile?.leetCode && (
                      <AboutMeLink href={profile.leetCode} target="_blank">
                        <img src={leetcode} height="20px" width="20px" alt="" />
                      </AboutMeLink>
                    )}
                    {profile?.codeChef && (
                      <AboutMeLink href={profile.codeChef} target="_blank">
                        <img src={codechef} height="20px" width="20px" alt="" />
                      </AboutMeLink>
                    )}
                    {profile?.codeForce && (
                      <AboutMeLink href={profile.codeForce} target="_blank">
                        <img
                          src={codeforces}
                          height="20px"
                          width="20px"
                          alt=""
                        />
                      </AboutMeLink>
                    )}
                  </AboutMeLinkWrapper>
                </AboutMeLinkContainer>
              )}
            </AboutMeOuterContainer>

            <AboutMeSectionDivider />
          </div>
        )}

        {!profile?.profileComplete && open && (
          <Modal state={{ open }}>
            <AboutModalContainer>
              <CloseIcon size={23} onClick={() => setopen(false)} />

              <AboutModalText>Hello {profile?.firstName},</AboutModalText>
              <AboutModalText marginTop="8px">
                Please fill the mandatory fields
              </AboutModalText>
              <NewModal about={about} text="Let's Continue" mainSub="Edit User">
                <ProfileModal student={profile} />
              </NewModal>
            </AboutModalContainer>
          </Modal>
        )}
      </AboutMeInnerContainer>
    </AboutMeGridContainer>
  );
}

export default AboutMe;

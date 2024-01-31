import React, { useState } from "react";
import { Button, Input, Modal, notification } from "antd";
import { serviceGet, servicePut } from "../../utils/api";
import DNDSingle from "./DNDSingle";
import { setHeader } from "../../utils/header";
import {
  DNDContainer,
  DashedContainer,
  Important,
  ModalButtonContainer,
  ModalDeleteButton,
  ModalFormContainer,
  ModalLabel,
  ModalSaveButton,
} from "../../styles/Modals/sharedModals.styles";
import { MarginContainer } from "../../styles/Certificates/certificates.styles";
import useLoadingStore from "../../store/loadingStore";
const ProfileModal = ({ student, setopen, about }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [updateProfile, setupdateProfile] = useState({
    firstName: student?.firstName,
    lastName: student?.lastName,
    mobile: student?.mobile,
    image: student?.image,
    email: student?.email,
    resume: student?.resume,
    githubLink: student?.githubLink,
    blogLink: student?.blogLink,
    leetCode: student?.leetCode,
    codeChef: student?.codeChef,
    codeForce: student?.codeForce,
    address: {
      city: student?.address?.city,
      pincode: student?.address?.pincode,
      state: student?.address?.state,
    },
  });

  //first we upload the file and store it in the state which is represented in the page and then we run the function where we pass the file which we have selected
  const handleFileSelect = (file) => {
    setSelectedFile(file);
    handlePdfUpload(file);
  };
  const setLoading = useLoadingStore((state) => state.setLoading);
  //uploads the resume and updates the new resume in the backend which was added
  const handlePdfUpload = async (selectedFile) => {
    // dispatch(setLoadingTrue());
    // toast.success("Hold short while we upload your file!");
    const type = "." + selectedFile.type.split("/")[1];

    if (type === ".pdf") {
      try {
        setLoading(true);

        const { url } = await serviceGet(
          `student/student-api/v1/me/url?type=${type}&path=/student-resume`
        );
        await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: selectedFile,
        });

        const pdfUrl = url.split("?")[0];
        
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
          notification.success({ message: "Resume uploaded successfully" });
          // toast.success(message);
          setupdateProfile({
            ...updateProfile,
            resume: student?.resume,
          });
        } else {
          notification.error({
            message: "Issue in uploading and updating the resume",
          });
          //   toast.error("Issue in uploading and updating the resume");
        }
      } catch (error) {
        notification.error({
          message: "Issue in uploading and updating the resume",
        });
        // toast.error("Issue in uploading and updating the resume");
      } finally {
        setLoading(false);
        // dispatch(setLoadingFalse());
      }
    } else {
      notification.error({ message: "Please upload only a pdf file format" });
      //   toast.error("Please upload only a pdf file format");
    }
  };

  //   const dispatch = useDispatch();

  //submit the details which are added or changed in profile using profile modal
  const handleSubmit = async (e) => {
    e.preventDefault();
    // dispatch(setLoadingTrue());
    try {
      setLoading(true);
      setHeader("auth", `bearer ${localStorage.getItem("token")}`);
      const {
        success,
        data: { student },
        message,
      } = await servicePut("student/student-api/v1/me/update", updateProfile);

      if (success) {
        // toast.success("Profile details updated");
        setupdateProfile({
          firstName: student?.firstName,
          lastName: student?.lastName,
          mobile: student?.mobile,
          email: student?.email,
          address: student?.address,
          githubLink: student?.githubLink,
          blogLink: student?.blogLink,
          leetCode: student?.leetCode,
          codeChef: student?.codeChef,
          codeForce: student?.codeForce,
          ...updateProfile,
        });
        // dispatch(loadUser()); //loads the page or the user details basically does no mean physically loads the page but refreshes the same token which was generated during the auth so that the information is represented at that point of time only
        setopen(false);
        await about(); //calls the function which shows immediate updation of the details
      } else {
        notification.error({ message: "Error in updating profile details" });
        // toast.error("Error in updating profile details");
      }
    } catch (error) {
      notification.error({ message: "Error in updating profile details" });
      //   toast.error("Error in updating profile details");
    } finally {
      setLoading(false);
      //   dispatch(setLoadingFalse());
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <DashedContainer>
          Please enter your name carefully, same name will be printed in your
          certificates.
        </DashedContainer>
        <ModalFormContainer>
          <ModalLabel>
            First Name <Important>*</Important>
          </ModalLabel>
          <div>
            <Input
              defaultValue={updateProfile?.firstName}
              id="first-name"
              name="f-name"
              required
              onChange={(e) =>
                setupdateProfile({
                  ...updateProfile,
                  firstName: e.target.value,
                })
              }
              type="text"
              autoComplete="name"
              placeholder="text"
            />
          </div>
          <ModalLabel>
            Last Name <Important>*</Important>
          </ModalLabel>

            <Input
              defaultValue={updateProfile?.lastName}
              id="last-name"
              name="l-name"
              required
              onChange={(e) =>
                setupdateProfile({
                  ...updateProfile,
                  lastName: e.target.value,
                })
              }
              type="text"
              autoComplete="name"
            />
       
          <ModalLabel>
            Address <Important>*</Important>
          </ModalLabel>

          <Input
            id="city"
            defaultValue={updateProfile?.address?.city}
            name="city"
            required
            onChange={(e) =>
              setupdateProfile({
                ...updateProfile,
                address: {
                  ...updateProfile?.address,
                  city: e.target.value,
                },
              })
            }
            type="text"
            autoComplete="city"
          />
          <MarginContainer />
          <Input
            id="state"
            defaultValue={updateProfile?.address?.state}
            name="state"
            required
            onChange={(e) =>
              setupdateProfile({
                ...updateProfile,
                address: {
                  ...updateProfile?.address,
                  state: e.target.value,
                },
              })
            }
            type="text"
            autoComplete="state"
          />
          <ModalLabel>Contact Info</ModalLabel>

          <ModalLabel>
            Phone Number <Important>*</Important>
          </ModalLabel>

          <Input
            id="phone"
            name="phone"
            defaultValue={updateProfile?.mobile}
            required
            onChange={(e) =>
              setupdateProfile({ ...updateProfile, mobile: e.target.value })
            }
            type="number"
            autoComplete="phone"
          />


            <ModalLabel>
              Email <Important>*</Important>
            </ModalLabel>
            <Input
              id="email"
              name="email"
              defaultValue={updateProfile?.email}
              disabled
              required
              type="email"
              autoComplete="email"
            />


          <ModalLabel>Github Link</ModalLabel>

          <Input
            id="githubLink"
            name="githubLink"
            onChange={(e) =>
              setupdateProfile({
                ...updateProfile,
                githubLink: e.target.value,
              })
            }
            defaultValue={updateProfile?.githubLink}
            type="url"
            autoComplete="githubLink"
          />

          <ModalLabel>Blog Link</ModalLabel>

          <Input
            id="blogLink"
            name="blogLink"
            onChange={(e) =>
              setupdateProfile({ ...updateProfile, blogLink: e.target.value })
            }
            defaultValue={updateProfile?.blogLink}
            type="url"
            autoComplete="blogLink"
          />

          <ModalLabel>Leetcode Link</ModalLabel>

          <Input
            id="leetCode"
            name="leetCode"
            onChange={(e) =>
              setupdateProfile({ ...updateProfile, leetCode: e.target.value })
            }
            defaultValue={updateProfile?.leetCode}
            type="url"
            autoComplete="leetCode"
          />

          <ModalLabel>CodeChef Link</ModalLabel>

          <Input
            id="codeChef"
            name="codeChef"
            onChange={(e) =>
              setupdateProfile({ ...updateProfile, codeChef: e.target.value })
            }
            defaultValue={updateProfile?.codeChef}
            type="url"
            autoComplete="codeChef"
          />

          <ModalLabel>CodeForces Link</ModalLabel>

          <Input
            id="codeForce"
            name="codeForce"
            onChange={(e) =>
              setupdateProfile({
                ...updateProfile,
                codeForce: e.target.value,
              })
            }
            defaultValue={updateProfile?.codeForce}
            type="url"
            autoComplete="codeForce"
          />

          <ModalLabel>Resume</ModalLabel>

          <DNDContainer>
            <DNDSingle onFileSelect={handleFileSelect} />
          </DNDContainer>
          <ModalButtonContainer>
            <ModalSaveButton type="submit" onClick={handleSubmit}>
              Save
            </ModalSaveButton>
          </ModalButtonContainer>
        </ModalFormContainer>
      </form>
    </>
  );
};
export default ProfileModal;

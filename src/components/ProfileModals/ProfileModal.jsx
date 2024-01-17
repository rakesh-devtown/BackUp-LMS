import React, { useState } from "react";
import { Button, Input, Modal, notification } from "antd";
import { serviceGet, servicePut } from "../../utils/api";
import DNDSingle from "./DNDSingle";
import { setHeader } from "../../utils/header";
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

  //uploads the resume and updates the new resume in the backend which was added
  const handlePdfUpload = async (selectedFile) => {
    // dispatch(setLoadingTrue());
    // toast.success("Hold short while we upload your file!");
    const type = "." + selectedFile.type.split("/")[1];

    if (type === ".pdf") {
      try {
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
            notification.error({ message: "Issue in uploading and updating the resume" });
          //   toast.error("Issue in uploading and updating the resume");
        }
      } catch (error) {
            notification.error({ message: "Issue in uploading and updating the resume" });
        // toast.error("Issue in uploading and updating the resume");
      } finally {
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
      //   dispatch(setLoadingFalse());
    }
  };

  return (
    <>
      
        <form onSubmit={handleSubmit}>
          <div
            style={{
              border: "2px dashed red",
              margin: "1rem",
              borderRadius: "0.375rem",
              padding: "0.5rem",
              backgroundColor: "#FEE2E2",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            Please enter your name carefully, same name will be printed in your
            certificates.
          </div>
          <div
            style={{
              marginBottom: "2.5rem",
              width: "100%",
              padding: "0.75rem",
              marginTop: "0.75rem",
            }}
          >
            <p
              style={{
                fontWeight: "700",
                marginTop: "1.25rem",
                color: "#747474",
              }}
            >
              First Name
              <span style={{ color: "#EF4444" }}>*</span>
            </p>
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
            <p
              style={{
                fontWeight: "700",
                marginTop: "1.25rem",
                color: "#747474",
              }}
            >
              Last Name
              <span style={{ color: "#EF4444" }}>*</span>
            </p>
            <div style={{ marginTop: "1.25rem" }}>
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
            </div>
            <p
              style={{
                fontWeight: "700",
                marginTop: "1.25rem",
                marginLeft: "0.25rem",
                color: "#747474",
              }}
            >
              Address <span style={{ color: "#EF4444" }}>*</span>
            </p>
            <div style={{ marginTop: "0.75rem" }}>
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
            </div>
            <div style={{ marginTop: "0.75rem" }}>
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
            </div> 
            <p style={{fontWeight: '700', marginTop: '1.25rem', marginLeft: '0.25rem', color: '#747474'}}>
  Contact info
</p>
<div style={{marginTop: '0.75rem'}}>
  <p style={{fontWeight: '700', fontSize: '0.875rem', marginLeft: '0.25rem', marginBottom: '0.25rem', color: '#747474'}}>
    Phone Number <span style={{color: '#EF4444'}}>*</span>
  </p>

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
</div>



<div style={{marginTop: '0.75rem'}}>
  <p style={{fontWeight: '700', fontSize: '0.875rem', marginLeft: '0.25rem', marginBottom: '0.25rem', color: '#747474'}}>
    Email <span style={{color: '#EF4444'}}>*</span>
  </p>
  <Input
    id="email"
    name="email"
    defaultValue={updateProfile?.email}
    disabled
    required
    type="email"
    autoComplete="email"
  />
</div>
<div style={{marginTop: '0.75rem'}}>
  <p style={{fontWeight: '700', fontSize: '0.875rem', marginLeft: '0.25rem', marginBottom: '0.25rem', color: '#747474'}}>
    Github Link
  </p>

  <Input
    id="githubLink"
    name="githubLink"
    onChange={(e) =>
      setupdateProfile({ ...updateProfile, githubLink: e.target.value })
    }
    defaultValue={updateProfile?.githubLink}
    type="url"
    autoComplete="githubLink"
  />
</div>

<div className="mt-3">
          <p className="font-bold text-sm ml-1 mb-1 text-[#747474]">
            Blog Link
          </p>
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
        </div>
        <div className="mt-3">
          <p className="font-bold text-sm ml-1 mb-1 text-[#747474]">
            Leetcode Link
          </p>
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
        </div>
        <div style={{marginTop: '0.75rem'}}>
  <p style={{fontWeight: '700', fontSize: '0.875rem', marginLeft: '0.25rem', marginBottom: '0.25rem', color: '#747474'}}>
    Codechef Link
  </p>
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
</div>
<div style={{marginTop: '0.75rem'}}>
  <p style={{fontWeight: '700', fontSize: '0.875rem', marginLeft: '0.25rem', marginBottom: '0.25rem', color: '#747474'}}>
    Codeforces Link
  </p>
  <Input
    id="codeForce"
    name="codeForce"
    onChange={(e) =>
      setupdateProfile({ ...updateProfile, codeForce: e.target.value })
    }
    defaultValue={updateProfile?.codeForce}
    type="url"
    autoComplete="codeForce"
  />
</div>

<p style={{fontWeight: '700', marginTop: '1.25rem', marginLeft: '0.25rem', color: '#747474'}}>
  Resume
</p>
<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2.5rem', height: '100%'}}>
  <DNDSingle onFileSelect={handleFileSelect} />
</div>
<div style={{display: 'flex'  ,  justifyContent: 'flex-end', marginTop: '2.5rem', marginRight: '1rem'}}>
  <Button type="submit"  
    style={{
      border : "1px solid black",
    }}
    onClick={handleSubmit}
  >
    Save
  </Button>
</div>





          </div>
        </form>
    </>
  );
};
export default ProfileModal;

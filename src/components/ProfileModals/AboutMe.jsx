import { Modal, notification } from "antd";
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
import useWindowSize from "../../hooks/useWindowSixe"

function AboutMe({ profile, about }) {
    const {width} = useWindowSize() ;

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
    // console.log("Profile:", profile);
    // check if profila data exists and has loaded and  profile is not complete, then open the modal
    if (profile && !profile?.profileComplete) {
      // console.log("Opening modal");
      setopen(true);
    }
  }, [profile]);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)" }}>
      
      <div
        style={{
          marginTop: "1.25rem",
          width: "100%",
          gridColumnStart: "1",
          gridColumnEnd: "9",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <div style={{ backgroundColor: "#FFFFFF", marginBottom: "2rem" }}>
          {profile && profile.profileComplete ? (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "4px",
                    padding: "8px",
                  }}
                >
                  <>
                    <label htmlFor="desktop-upload">
                      <img
                        src={profile?.image ? profile?.image : "fdsjhgg"}
                        style={{
                          height: "112px",
                          width: "112px",
                          borderRadius: "50%",
                          border: "4px solid white",
                        }}
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
                    <h2
                      style={{
                        color: "#323232",
                        fontSize: "2em",
                        fontWeight: "bold",
                        marginRight: "2px",
                        

                      }}
                    >
                      {profile?.firstName + " " + profile?.lastName}
                    </h2>
                    <p
                      style={{
                        fontSize: "1em",
                        marginTop: "1px",
                        fontWeight: "bold",
                        color: "#818181",
                      }}
                    >
                      {profile?.address?.city + ", " + profile?.address?.state}
                    </p>
                  </div>
                </div>
                <div style={{ marginTop: "24px" }}>
                  <NewModal about={about} text="Prof" mainSub="Edit User">
      <ProfileModal student={profile} />
                  </NewModal>
                </div>
              </div>

              <div
                style={{
                  width: "95%",
                  height: "1px",
                  marginLeft: "6px",
                  backgroundColor: "#E8E8E8",
                }}
              ></div>
              <div style={{ padding: "16px", marginTop: "24px" }}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <p
                    style={{
                      fontSize: "22px",
                      fontWeight: "bold",
                      color: "#484848",
                    }}
                  >
                    Contact Information
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: width > 1100 ? "row" : "column",
                    gap: "24px",
                    width: "100%",
                    marginTop: "16px",
                    
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "1em",
                        fontWeight: "bold",
                        color: "#928e8e",
                      }}
                    >
                      Email address
                    </p>
                    <span style={{ fontWeight: "500" }}>{profile?.email}</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "1em",
                        fontWeight: "bold",
                        color: "#928e8e",
                      }}
                    >
                      Phone number
                    </p>
                    <span style={{ fontWeight: "500" }}>{profile?.mobile}</span>
                  </div>
                  <div
                    style={{
                        border : "1px solid #D1D5DB",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <input
                      id="file-upload"
                      type="file"
                      accept="application/pdf"
                      style={{ display: "none" }}
                      onChange={handlePdfUpload}
                    />
                    <label
                      htmlFor="file-upload"
                      style={{
                        cursor: "pointer",
                        borderColor: "#D1D5DB",
                        borderWidth: "1px",
                        color: "#374151",
                        padding: "8px 16px",
                        borderRadius: "8px",
                      }}
                    >
                      {profile?.resume ? "Update Resume" : "Add Resume"}
                    </label>
                  </div>
                </div>

                {linkExists && (
                  <div style={{ marginTop: "16px" }}>
                    <p
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: "bold",
                        margin: "8px 0",
                      }}
                    >
                      Extra details
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        flexDirection: "row",
                      }}
                    >
                      {profile?.githubLink && (
                        <a
                          href={profile.githubLink}
                          style={{
                            marginRight: "12px",
                            marginBottom: "12px",
                            marginTop: "4px",
                          }}
                          target="_blank"
                        >
                          <GithubFilled size={28} />
                        </a>
                      )}

                      {profile?.blogLink && (
                        <a
                          href={profile.blogLink}
                          target="_blank"
                          style={{
                            marginRight: "12px",
                            marginBottom: "12px",
                            marginTop: "4px",
                          }}
                        >
                          <DeliveredProcedureOutlined size={28} />
                        </a>
                      )}
                      {profile?.leetCode && (
                        <a
                          href={profile.leetCode}
                          target="_blank"
                          style={{
                            marginRight: "12px",
                            marginBottom: "12px",
                            marginTop: "4px",
                          }}
                        >
                          <CodeFilled size={28} />
                        </a>
                      )}
                      {profile?.codeChef && (
                        <a
                          href={profile.codeChef}
                          target="_blank"
                          style={{
                            marginRight: "12px",
                            marginBottom: "12px",
                            marginTop: "4px",
                          }}
                        >
                          <CodeFilled size={28} />
                        </a>
                      )}
                      {profile?.codeForce && (
                        <a
                          href={profile.codeForce}
                          target="_blank"
                          style={{ marginTop: "4px", marginBottom: "12px" }}
                        >
                          <CodeTwoTone size={28} />
                        </a>
                      )}

                      {/* ... rest of the code */}
                    </div>
                  </div>
                )}
              </div>

              <div
                style={{
                  width: "100%",
                  height: "0.5px",
                  marginTop: "8px",
                  backgroundColor: "#E5E3E3",
                }}
              ></div>
            </div>
          ) : (
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "16px",
                    padding: "16px",
                    width: "40%",
                  }}
                >
                  <label htmlFor="desktop-upload">
                    <img
                      src={profile?.image ? profile?.image : "fjkdnf"}
                      style={{
                        height: "192px",
                        width: "192px",
                        borderRadius: "50%",
                        border: "4px solid white",
                      }}
                    />
                  </label>
                  <input
                    accept="image/*"
                    onChange={handleImageUpload}
                    id="desktop-upload"
                    style={{ display: "none" }}
                    type="file"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "40px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "500px",
                      alignItems: "center",
                    }}
                  >
                    <h2
                      style={{
                        fontSize: "2em",
                        fontWeight: "bold",
                        marginRight: "8px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {profile?.firstName + " " + profile?.lastName}
                    </h2>
                    <div>
                        
                      <NewModal about={about} text="Prof" mainSub="Edit User">
                        <ProfileModal student={profile} />
                      </NewModal>
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: "1em",
                      marginTop: "8px",
                      fontWeight: "bold",
                      color: "#928e8e",
                    }}
                  >
                    {profile?.address?.city && profile?.address?.state && (
                      <>{profile.address.city + ", " + profile.address.state}</>
                    )}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginTop: "24px",
                    }}
                  >
                    <p style={{ fontSize: "1.125em", fontWeight: "bold" }}>
                      Contact Information
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "24px",
                      width: "100%",
                      marginTop: "8px",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <p
                        style={{
                          fontSize: "1em",
                          fontWeight: "bold",
                          color: "#928e8e",
                        }}
                      >
                        Email address
                      </p>
                      <span style={{ fontWeight: "500" }}>
                        {profile?.email}
                      </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <p
                        style={{
                          fontSize: "1em",
                          fontWeight: "bold",
                          color: "#928e8e",
                        }}
                      >
                        Phone number
                      </p>
                      <span style={{ fontWeight: "500" }}>
                        {profile?.mobile}
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                    >
                      <div>
                        <input
                          id="file-upload"
                          type="file"
                          accept="application/pdf"
                          style={{ display: "none" }}
                          onChange={handlePdfUpload}
                        />
                        <label
                          htmlFor="file-upload"
                          style={{
                            cursor: "pointer",
                            border: "1px solid #ccc",
                            color: "#333",
                            padding: "8px 16px",
                            borderRadius: "8px",
                          }}
                        >
                          {profile?.resume ? "Update Resume" : "Add Resume"}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ padding: "64px 32px", marginTop: "40px" }}></div>

              {linkExists && (
                <div style={{ marginTop: "16px" }}>
                  <p
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: "bold",
                      margin: "8px 0",
                    }}
                  >
                    Extra details
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      flexDirection: "column",
                    }}
                  >
                    {profile?.githubLink && (
                      <a
                        href={profile.githubLink}
                        style={{
                          marginRight: "12px",
                          marginBottom: "12px",
                          marginTop: "4px",
                        }}
                        target="_blank"
                      >
                        <GithubFilled size={28} />
                      </a>
                    )}

                    {profile?.blogLink && (
                      <a
                        href={profile.blogLink}
                        target="_blank"
                        style={{
                          marginRight: "12px",
                          marginBottom: "12px",
                          marginTop: "4px",
                        }}
                      >
                        <DeliveredProcedureOutlined size={28} />
                      </a>
                    )}
                    {profile?.leetCode && (
                      <a
                        href={profile.leetCode}
                        target="_blank"
                        style={{
                          marginRight: "12px",
                          marginBottom: "12px",
                          marginTop: "4px",
                        }}
                      >
                        <CodeFilled size={28} />
                      </a>
                    )}
                    {profile?.codeChef && (
                      <a
                        href={profile.codeChef}
                        target="_blank"
                        style={{
                          marginRight: "12px",
                          marginBottom: "12px",
                          marginTop: "4px",
                        }}
                      >
                        <CodeFilled size={28} />
                      </a>
                    )}
                    {profile?.codeForce && (
                      <a
                        href={profile.codeForce}
                        target="_blank"
                        style={{ marginTop: "4px", marginBottom: "12px" }}
                      >
                        <CodeTwoTone size={28} />
                      </a>
                    )}

                    {/* ... rest of the code */}
                  </div>
                </div>
              )}
            </div>
          )}

          {!profile?.profileComplete && open && (
            <Modal state={{ open }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "64px",
                  borderRadius: "16px",
                  backgroundColor: "#122344",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <CloseCircleFilled
                  size={23}
                  onClick={() => setopen(false)}
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    cursor: "pointer",
                    color: "white",
                    fontSize: "24px",
                  }}
                />

                <p
                  style={{
                    fontSize: "1.25rem",
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Hello {profile?.firstName},
                </p>
                <p
                  style={{
                    fontSize: "1.25rem",
                    marginTop: "8px",
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Please fill the mandatory fields
                </p>
                <NewModal
                  about={about}
                  text="Let's Continue"
                  mainSub="Edit User"
                >
                  <ProfileModal student={profile} />
                </NewModal>
              </div>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

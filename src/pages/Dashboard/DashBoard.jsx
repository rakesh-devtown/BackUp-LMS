import React, { useState } from "react";

import MainLogo from "../../assets/images/Main Logo.png";
import { LayoutHamburger } from "../../styles/layout.styles";
import { Breadcrumb, Button, Form, Input, Select } from "antd";
import {
  ArrowRightOutlined,
  CopyFilled,
  GroupOutlined,
  MenuOutlined,
  PaperClipOutlined,
} from "@ant-design/icons";
import Shourya from "../../assets/images/Shaurya Sinha-B&W.png";
import Ashish from "../../assets/images/Ashish Modi-B&W.png";
import { BlueText, StyledButton } from "../../styles/LoginPage.styles.js";
import girlImage from "../../assets/images/Rectangle 3.png";

import {
  ContactDiv,
  FounderImage,
  HeroDiv,
  MobileDashBoardMainText,
  NavItem,
  OurOffering,
  UnLockText,
} from "../../styles/DashBoardUiMobile/mobileDashborad.styles";
import FormItem from "antd/es/form/FormItem";
import MobileCodeMenu from "../../components/ui/MobileCodeMenu";
import PhoneInput from "react-phone-number-input";
import useWindowSize from "../../hooks/useWindowSize.js";
import loginUiStore from "../../store/loginUi.store.js";

function DashBoard() {
  const [code, setCode] = useState();
  const { width } = useWindowSize();
  const setIsMobileAuthModelOpen = loginUiStore((state) => state.setIsMobileAuthModelOpen);

  const setIsDesktopAuthModelOpen = loginUiStore((state) => state.setIsDesktopAuthModelOpen);
  const isMobileAuthModelOpen = loginUiStore((state) => state.isMobileAuthModelOpen);
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        width: "100%",
        background:
          "radial-gradient(50% 50% at 50% 50%, #121e37 0%, #080d17 100%)",

        flexDirection: "column",
      }}
    >
      {/* NavBar  */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: width < 992 ? "104px" : "70px",
          backgroundColor: "#101A2E",
          padding: "9px 24px",
        }}
      >
        <img src={MainLogo} height={41} alt="" srcset="" />
        {
          width < 992 ? (

            <div>
              <MenuOutlined

                onClick={() => {
                  setIsMobileAuthModelOpen(!isMobileAuthModelOpen)
                }}
                style={{
                  scale: "2",
                  color: "white",
                }}
              />
            </div>
          ) : (
            <div style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              gap: "20px",
            }}
            >
              <NavItem >
                Home
              </NavItem>
              <NavItem >
                Courses
              </NavItem>
              <NavItem >
                Bytes
              </NavItem>
              <NavItem >
                SignIn
              </NavItem>
              <Button

                onClick={() => {
                  setIsDesktopAuthModelOpen(true)
                }}
                style={{
                  backgroundColor: "inherit",
                  margin: "0px",
                  color: "white",
                  fontWeight: "700",
                }}  >
                Login
              </Button>
            </div>
          )
        }
      </nav>
      <section
        style={{
          display: "flex",
          flexDirection: width >= 992 ? "row" : "column",
          justifyContent: "center",
          alignItems: "center",
          width: width >= 992 ? "65%" : "100%",
          height: "100%",
        }}
      >
        <HeroDiv>
          <MobileDashBoardMainText>
            India's Fastest Growing Tech Learning Community
          </MobileDashBoardMainText>
          <UnLockText>
            Unlock elite tech skills with industry frontrunners!
          </UnLockText>
          {/* Founder Images Div  */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "red",
              width: "fit-content",
              height: "400px",
              position: "relative",
            }}
          >
            <FounderImage
              style={{
                zIndex: "9",
                left: "-220px",
              }}
              src={Shourya}
              alt="Shourya Sinha"
            />
            <FounderImage
              style={{
                zIndex: "10",
                left: "0px",
              }}
              src={Ashish}
              alt="Ashish Modi"
            />
          </div>
        </HeroDiv>
        <ContactDiv
          style={{
            width: width >= 992 ? "500px" : "95%",
          }}
        >
          <h1>
            Get a Free Consultation with our{" "}
            <span
              style={{
                color: "#0859DE",
              }}
            >
              Education Experts!
            </span>
          </h1>

          <Form>
            <FormItem>
              <Input
                type="text"
                placeholder="Full Name"
                style={{
                  padding: "16px",
                  borderRadius: "6px",
                  marginTop: "16px",
                  width: "100%",
                  border: "1px solid #848484",
                }}
              />
            </FormItem>
            <FormItem>
              <Input
                type="text"
                placeholder="Email"
                style={{
                  padding: "16px",
                  borderRadius: "6px",
                  width: "100%",
                  border: "1px solid #848484",
                }}
              />
            </FormItem>
            <FormItem>
              <PhoneInput
                placeholder="Enter phone number"
                value={code}
                style={{
                  padding: "16px",
                  borderRadius: "6px",
                  width: "100%",
                  border: "1px solid #848484",
                }}
                onChange={setCode}
              />
            </FormItem>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "baseline",

                width: "100%",
              }}
            >
              <FormItem>
                <StyledButton
                  marginBottom={0}
                  style={{
                    width: "234px",
                  }}
                >
                  Apply Now
                </StyledButton>
              </FormItem>
              {width >= 992 && (
                <div
                  style={{
                    color: "#0859DE",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    fontSize: "12px",
                    width: "100%",
                    paddingLeft: "4px",
                    gap: "3px",
                  }}
                >
                  <GroupOutlined />
                  <p
                    style={{
                      textAlign: "start",
                    }}
                  >
                    Limited Seats
                  </p>
                </div>
              )}
            </div>

            <p
              style={{
                display: "flex",
              }}
            >
              Already have a account? <BlueText> Click Here </BlueText>
            </p>
            <p
              style={{
                display: "flex",
                fontSize: "11px",
                gap: "5px",
              }}
            >
              By scheduling, Iagree to DevTown <BlueText>Terms</BlueText>
              and
              <BlueText>Privacy Policy</BlueText>
            </p>
          </Form>
        </ContactDiv>
      </section>
      {width >= 992 && (
        <section
          style={{
            marginTop: "64px",
            backgroundColor: "white",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "64px 0px",
          }}
        >
          <div
            style={{
              width: "75%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding: "20px 0px",
            }}
          >
            {/* <div>

            </div>
            <div></div> */}

            <OurOffering>OUR OFFERINGS </OurOffering>

            <div
              style={{
                width: "100%",
                maxWidth: "913px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                boxShadow: "0px 4.187px 19.888px 0px rgba(0, 19, 58, 0.25)",
                padding: "20px 10px",
                position: "relative",
              }}
            >
              {/* Floating Course  */}

              <div
                style={{
                  position: "absolute",
                  width: "234px",
                  height: "163px",
                  top: "30%",
                  right: "-150px",
                  display: "flex",
                  justifyContent: "end",
                  flexDirection: "column",
                  alignItems: "end",
                }}
              >
                <h1
                  style={{
                    fontSize: "40px",
                    textAlign: "right",
                  }}
                >
                  Upskilling Courses
                </h1>
                <div
                  style={{
                    padding: "5px 15px",
                    background:
                      "linear-gradient(90deg,rgba(89, 86, 139, 1) 0%,rgba(76, 9, 121, 1) 8%,rgba(0, 82, 255, 1) 100%)",
                    color: "white",
                    borderRadius: "8px",
                    textAlign: "center",
                    width: "160px",
                    fontSize: "12px",
                  }}
                >
                  25% off on all courses
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "start",
                  flexDirection: "row",
                  gap: "20px",
                }}
              >
                <div>
                  <img src={girlImage} alt="" />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "start",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <div>
                    <p>
                      Expertly structured courses for your specific upskilling
                      needs
                    </p>
                  </div>
                  <div>
                    <h5>Why Choose Upskilling Courses?</h5>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "start",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          width: "40px",

                          padding: "10px",
                          backgroundColor: "#F5F7FD",
                        }}
                      >
                        <PaperClipOutlined />
                      </div>
                      Expertly structured courses for your specific upskilling
                      needs
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          width: "40px",

                          padding: "10px",
                          backgroundColor: "#F5F7FD",
                        }}
                      >
                        <PaperClipOutlined />
                      </div>
                      Expertly structured courses for your specific upskilling
                      needs
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          width: "40px",

                          padding: "10px",
                          backgroundColor: "#F5F7FD",
                        }}
                      >
                        <PaperClipOutlined />
                      </div>
                      Expertly structured courses for your specific upskilling
                      needs
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          width: "40px",

                          padding: "10px",
                          backgroundColor: "#F5F7FD",
                        }}
                      >
                        <PaperClipOutlined />
                      </div>
                      Expertly structured courses for your specific upskilling
                      needs
                    </div>
                  </div>
                  <div>
                    <StyledButton
                      style={{
                        padding: "20px 20px",
                      }}
                    >
                      Explore Upskilling Courses <ArrowRightOutlined />
                    </StyledButton>
                  </div>
                </div>
              </div>
            </div>
            <footer
              style={{
                width: "80%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px 10px",
                backgroundColor: "#FFEBE3",
                borderRadius: "0px 0px 12px 12px",
                maxWidth: "789px",
              }}
            >
              <div>
                <CopyFilled />
                Get Upto <span>25% scholarship</span>
                on our UpSkilling Courses
              </div>
              <div>
                <ArrowRightOutlined />
              </div>
            </footer>
          </div>
        </section>
      )}
    </main>
  );
}

export default DashBoard;

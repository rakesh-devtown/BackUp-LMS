import { useState } from "react";
import styled from "styled-components";
import { Button, Form, Input } from "antd";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  StyledForm,
  Title,
  InnerContainer,
  SaveBtn,
} from "../../../styles/myResume.styles";
import LinkedIn from "../../../assets/images/socialMediaLogo/Linkedin.png";
import Leetcode from "../../../assets/images/socialMediaLogo/Leetcode.png";
import Github from "../../../assets/images/socialMediaLogo/GitHub.png";
import Behance from "../../../assets/images/socialMediaLogo/Behance.png";
import Reddit from "../../../assets/images/socialMediaLogo/Reddit.png";
import Website from "../../../assets/images/socialMediaLogo/Website.png";
import Medium from "../../../assets/images/socialMediaLogo/Medium.png";
import Dribble from "../../../assets/images/socialMediaLogo/Dribble.png";
import useWindowSize from "../../../hooks/useWindowSize";
import useResumeStore from "../../../store/resumeStore";

const mockData = [
  {
    name: "LinkedIn",
    img: LinkedIn,
    label: "linkedIn",
  },
  {
    name: "Github",
    img: Github,
    label: "github",
  },
  {
    name: "Leetcode",
    img: Leetcode,
    label: "leetCode",
  },
  {
    name: "Website",
    img: Website,
    label: "website",
  },
  {
    name: "Dribble",
    img: Dribble,
    label: "dribble",
  },
  {
    name: "Behance",
    img: Behance,
    label: "behance",
  },
  {
    name: "Reddit",
    img: Reddit,
    label: "reddit",
  },
  {
    name: "Medium",
    img: Medium,
    label: "medium",
  },
];

const AddSocialMedia = ({ handleCancel }) => {
  const [values, setValues] = useState({});
  const [form] = Form.useForm();
  const { updateSocialLinks } = useResumeStore();
  const socialLinks = useResumeStore((state) => state.socialLinks);
  const { width } = useWindowSize();

  Form.useWatch((val) => {
    setValues(val);
  }, form);

  const handleSubmit = async (e) => {
    try {
      await updateSocialLinks(values);
    } catch (err) {
      console.log(err);
    } finally {
      handleCancel();
    }
  };
  const handleRemove = (field) => {
    form.resetFields([field]);
  };

  return (
    <>
      <StyledForm
        form={form}
        name="basic"
        onFinish={handleSubmit}
        width={width}
      >
        <Title>Add Social Media Account</Title>
        <InnerContainer>
          {mockData.map((e, id) => (
            <StyledCard key={e.label}>
              <img src={e.img} alt="icon" />
              <Form.Item
                initialValue={
                    socialLinks?.[e.label]
                }
                label={e.name}
                name={
                  e.label
                }
                rules={[
                  {
                    type: "url",
                    // warningOnly: true,
                    message: "Please type valid URL!",
                  },
                ]}
                normalize={(value) => value.trim()}
              >
                <Input placeholder="Url" size="large" />
              </Form.Item>
              {values?.[e.name] && width >= 768 && (
                <Button
                  type="text"
                  danger
                  className="btn btn1"
                  onClick={() => handleRemove(e.name)}
                >
                  Remove
                </Button>
              )}
              {values?.[e.name] && width < 768 && (
                <Button
                  type="text"
                  className="btn btn2"
                  danger
                  onClick={() => handleRemove(e.name)}
                >
                  <RiDeleteBin6Line />
                </Button>
              )}
            </StyledCard>
          ))}
        </InnerContainer>
        <Form.Item>
          <SaveBtn width={width} type="primary" htmlType="submit" size="large">
            Save
          </SaveBtn>
        </Form.Item>
      </StyledForm>
    </>
  );
};

const StyledCard = styled.div`
  display: flex;
  gap: ${(props) => (props.width >= 768 ? "16px" : "12px")};
  align-items: flex-start;
  i {
    display: grid;
    place-items: center;
    height: 67px;
    width: 67px;
    color: white;
    background-color: #069;
    border-radius: 50%;
  }
  .btn {
    height: 57px;
    display: grid;
    place-items: center;
    padding: 0;
    color: #e22d4c;
    font-family: "DM Sans";
    font-size: 16px;
    font-weight: 500;
  }
  .btn2 {
    padding: 0 6px;
    background-color: #ffe5e5;
    font-size: 23px;
    border-radius: 4px;
  }
`;
export default AddSocialMedia;

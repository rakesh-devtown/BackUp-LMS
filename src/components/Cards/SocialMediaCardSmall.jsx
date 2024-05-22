import styled from "styled-components"
import { FaLinkedinIn, FaRedditAlien } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";
import { BehanceOutlined, GithubOutlined } from "@ant-design/icons";

const SocialMediaCardSmall = () => {
    return (
        <StyledContainer>
            <i className="linkedin" ><FaLinkedinIn /></i>
            <i className="github"><GithubOutlined /></i>
            <i className="leetcode"><SiLeetcode /></i>
            <i className="www"><TbWorldWww /></i>
            <i className="behance"><BehanceOutlined /></i>
            <i className="reddit"><FaRedditAlien /></i>
            <i className="medium"><FaMedium /></i>

        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    i{
        display: grid;
        place-items: center;
        color: white;
        svg{
            height: 15px;
            width: 15px;
        }
        height: 27px;
        width: 27px;
        border-radius: 50%;
        background-color: green;
    }

    .linkedin{
        background-color: #069;
    }
    .github{
        background-color: #1B1F23;
    }
    .leetcode{
        background-color: #000;
    }
    .www{
        background-color: #069;
    }
    .behance{
        background-color: #111;
    }
    .reddit{
        background-color: #FF4500;
    }
    .medium{
        background-color: #000000;
    }
`

export default SocialMediaCardSmall
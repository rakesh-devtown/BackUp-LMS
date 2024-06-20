import styled from "styled-components"
import { FaLinkedinIn, FaRedditAlien } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";
import { BehanceOutlined, GithubOutlined } from "@ant-design/icons";
import useResumeStore from "../../store/resumeStore";

const SocialMediaCardSmall = () => {

    const socialLinks = useResumeStore(state => state.socialLinks);

    return (
        <StyledContainer>
            {socialLinks?.linkedIn && <a target="_blank" href={socialLinks?.linkedIn} className="linkedin" ><FaLinkedinIn /></a>}
            {socialLinks?.github && <a target="_blank" href={socialLinks?.github} className="github"><GithubOutlined /></a>}
            {socialLinks?.leetcode && <a target="_blank" href={socialLinks?.leetcode} className="leetcode"><SiLeetcode /></a>}
            {socialLinks?.website && <a target="_blank" href={socialLinks?.website} className="www"><TbWorldWww /></a>}
            { socialLinks?.behance && <a target="_blank" href={socialLinks?.behance} className="behance"><BehanceOutlined /></a>}
            {socialLinks?.reddit && <a target="_blank" href={socialLinks?.reddit} className="reddit"><FaRedditAlien /></a>}
            {socialLinks?.medium && <a target="_blank" href={socialLinks?.medium} className="medium"><FaMedium /></a>}

        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    a{
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
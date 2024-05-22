import { CloseOutlined, PlusOutlined } from "@ant-design/icons"
import { Button, Input } from "antd"
import { useState } from "react"
import styled from "styled-components"

const Skill = ({ skills, setSkills }) => {

    const [addSkill, setAddSkill] = useState(false)
    const [input, setInput] = useState('')

    const handleAddSkill = () => setAddSkill(!addSkill)
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
            setSkills(pre => [...pre, input])
            setInput('')
        }
        // setAddSkill(false)
    }
    const handleRemove = (e) => {
        setSkills(pre => [...pre.filter(ele => ele !== e)])
    }


    return (
        <StyledDiv>

            {
                addSkill &&
                <div className="input-box">
                    <label for="skill">Skills:
                    </label>
                    {/* <Input placeholder="Skill (i.e- Communication)" size='large' /> */}
                    <Input id="skill" value={input} placeholder="Skill (i.e- Communication)" onChange={e => setInput(e.target.value)} onKeyDown={e => handleKeyPress(e)}
                        suffix={<Close onClick={handleAddSkill}><CloseOutlined /></Close>} />
                </div>
            }

            {!addSkill && <h5>Skills <span className='blue'>*</span></h5>}
            {/* display all the skills */}
            {
                skills?.length > 0 &&
                <StyledSkill>
                    {skills.map((ele, ind) => (
                        <div key={ind}>
                            <p>{ele}</p>
                            <CloseOutlined style={{ fontSize: "10px" }} onClick={() => handleRemove(ele)} />
                        </div>
                    ))}
                </StyledSkill>
            }

            {!addSkill &&
                <StyledButton icon={<PlusOutlined />} size='large' shape='round' onClick={handleAddSkill} > Add Skill</StyledButton>
            }

        </StyledDiv>
    )
}

const StyledDiv = styled.div`
 font-family: "DM Sans";
    font-style: normal;
    line-height: normal;
    font-size: 16px;
    h5{
        font-weight: 700;
    }
    .blue{
        color: blue;
    }
    .input-box{
        position: relative;
        label{
            font-family: "DM Sans";
            padding: 0 5px !important;
            position: absolute;
            /* color: #121826; */
            color: rgba(0, 0, 0, 0.88);
            top: -13px;
            z-index: 5;
            background: white;
            left: 15px;
            font-weight: 600;
            padding: 0;
        }
        .ant-input-affix-wrapper{
            padding: 0;
        } 
    }
    input{
        padding: 18px 19px !important;
        color: #6C727F !important;
        height: auto;
        font-size: 16px !important;
        font-weight: 500;
    }
`

const Close = styled.i`
    position: absolute;
    top: 5px;
    right: 5px;
    color:rgba(0, 0, 0, 0.45);
    cursor:pointer;
`
const StyledSkill = styled.div`
display: flex;
gap: 10px;
padding: 10px 0 15px 0;
flex-wrap: wrap;
div{
    display: flex;
    align-items: center;
    gap: 2px;
    padding: 2px 7px;
    border-radius: 30px;
    color: #384D6D;
    background-color: #f5deb37d;
}
`
const StyledButton = styled(Button)`
     width: fit-content;
     color: #0859DE;
     margin-top: 10px;
`

export default Skill
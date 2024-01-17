import Fuse from 'fuse.js';
import React, { useState } from 'react'
import { fuzzy_skills } from '../../utils/fuzzy-skills';
import { servicePut } from '../../utils/api';
import { setHeader } from '../../utils/header';
import { notification } from 'antd';
import { PlusSquareFilled } from '@ant-design/icons';

function SkillModal({ setopen, about, skill }) {
    const [searchText, setSearchText] = useState('');
    const [skills, setSkills] = useState(skill);

    //implemented fuzzy search
    const options = {
        keys: ['name'],
        threshold: 0.4,
    };
    const fuse = new Fuse(fuzzy_skills.map((name) => ({ name })), options);
    const results = fuse.search(searchText);

    //for adding skills which are not in fuzzy search
    const handleAddSkill = () => {
        if (searchText.trim() !== '') {
            setSkills([...skills, searchText.trim()]);
            setSearchText('');
        }
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && results.length > 0) {
            setSearchText('');
        }
    };
    //for removing the skills
    const handleRemoveSkill = (index) => {
        const updatedSkills = [...skills];
        updatedSkills.splice(index, 1);
        setSkills(updatedSkills);
    };
    //saving the skill
    const handleSaveSkills = async (event) => {
        event.preventDefault();
        try { 
            setHeader("auth", `bearer ${localStorage.getItem("token")}`);
            const {
                success,
                data: { skill },
                message,
            } = await servicePut(
                `student/student-api/v1/me/skill`,
                { skill: skills }, //passing in the body
               
            );
            if (success) {
                // toast.success(message);
                setopen(false);
                await about();
            } else {
                notification.error({
                    message: "Failed to add the Skill",
                    description: message,
                }
                    )
                // toast.error(message);
            }
        } catch (error) {
            notification.error({
                message: "Failed to add the Skill",
                description: error.message,
            })
            // toast.error(error.response);
        } finally {
            // dispatch(setLoadingFalse());
        }
    };

    //colors of the pill will be coming for every skill
    const colors = [
        "#FFC5C5",
        "#C5FFED",
        "#E2C5FF",
        "#FFC5EB",
        "#FFFDC5",
    ];
    const getColor = (index) => {
        return colors[index % colors.length];
    };

  return (
    <form onSubmit={handleSaveSkills}>
  <p style={{ fontSize: "0.875rem", fontWeight: "400", marginLeft: "12px", marginBottom: "20px" }}>Highlight your expertise and attract potential employers or collaborators by showcasing your skills.</p>
  <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center", marginBottom: "8px" }}>
    <input
      type="text"
      placeholder="Add skill"
      style={{
        border: "1px solid gray",
        borderRadius: "4px",
        padding: "8px 12px",
        width: "50%",
        marginRight: "12px",
        outline: "none",
        boxShadow: "none",
      }}
      value={searchText}
      onChange={(event) => setSearchText(event.target.value)}
      onKeyDown={handleKeyDown}
    />
    {/* fuzzy search result */}
    {searchText && (
      <div style={{ position: "relative", zIndex: "50", padding: "8px", width: "50%", backgroundColor: "white", borderRadius: "8px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", maxHeight: "240px", overflowY: "auto" }}>
        {results.map((result) => (
          <div
            key={result.item.name}
            style={{ padding: "8px 16px", cursor: "pointer", backgroundColor: "transparent" }}
            onClick={() => {
              setSkills([...skills, result.item.name]);
              setSearchText('');
            }}
          >
            {result.item.name}
          </div>
        ))}
      </div>
    )}
    <div
      style={{
        border: "2px solid",
        backgroundColor: "white",
        borderColor: "#6422CD",
        gap: "8px",
        color: "#6422CD",
        display: "flex",
        alignItems: "center",
        borderRadius: "4px",
        padding: "8px 20px",
        cursor: "pointer",
      }}
      onClick={handleAddSkill}
    >
      <PlusSquareFilled />
      <p>Add</p>
    </div>
  </div>

  <div style={{ marginBottom: "8px" }}>
    <p style={{ fontSize: "1.125rem", fontWeight: "700", marginTop: "20px", marginBottom: "40px", marginLeft: "20px" }}>Current Skills</p>
    <div style={{ display :"flex", flexWrap:"wrap" , gap: "8px", width: "91.666667%", marginLeft: "8px", marginTop: "4px" }}>
      {skills.map((skill, index) => (
        <div
          style={{
            backgroundColor:"#F3ECFE",
            display: "flex",
            justifyContent: "center",
            padding: "8px 16px",
            marginBottom: "20px",
            border: "none",
            fontSize: "1rem",
            fontWeight: "500",
            borderRadius: "4px",
            cursor: "default",
          }}
          key={index}
        >
          <span style={{ marginRight: "4px", color: "#7030D1" }}>{skill}</span>
          <button
            style={{ color: "gray" }}
            onClick={() => handleRemoveSkill(index)}
          >
            &#10005;
          </button>
        </div>
      ))}
    </div>
  </div>

  <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
    <button children='Save' type='submit' />
  </div>
</form>
  )
}

export default SkillModal
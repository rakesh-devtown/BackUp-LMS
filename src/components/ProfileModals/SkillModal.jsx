import Fuse from 'fuse.js';
import React, { useState } from 'react'
import { fuzzy_skills } from '../../utils/fuzzy-skills';
import { servicePut } from '../../utils/api';
import { setHeader } from '../../utils/header';
import { notification } from 'antd';
import { PlusSquareFilled } from '@ant-design/icons';
import { SkillListButton, SkillListContainer, SkillListItem, SkillListText, SkillListTitle, SkillListWrapper, SkillModalAddButton, SkillModalContainer, SkillModalInput, SkillModalParagraph, SkillModalResultItem, SkillModalSearchResult } from '../../styles/Modals/skillmodal.styles';
import { ModalButtonContainer, ModalSaveButton } from '../../styles/Modals/sharedModals.styles';
import useLoadingStore from '../../store/loadingStore';

function SkillModal({ setopen, about, skill }) {
    const [searchText, setSearchText] = useState('');
    const [skills, setSkills] = useState(skill);
    const setLoading = useLoadingStore((state) => state.setLoading);

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
          setLoading(true);
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
          setLoading(false);
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
    <SkillModalParagraph>Highlight your expertise and attract potential employers or collaborators by showcasing your skills.</SkillModalParagraph>
<SkillModalContainer>
  <SkillModalInput
    type="text"
    placeholder="Add skill"
    value={searchText}
    onChange={(event) => setSearchText(event.target.value)}
    onKeyDown={handleKeyDown}
  />
  {/* fuzzy search result */}
  {searchText && (
    <SkillModalSearchResult>
      {results.map((result) => (
        <SkillModalResultItem
          key={result.item.name}
          onClick={() => {
            setSkills([...skills, result.item.name]);
            setSearchText('');
          }}
        >
          {result.item.name}
        </SkillModalResultItem>
      ))}
    </SkillModalSearchResult>
  )}
  <SkillModalAddButton onClick={handleAddSkill}>
    <PlusSquareFilled />
    <p>Add</p>
  </SkillModalAddButton>
</SkillModalContainer>

<SkillListContainer>
  <SkillListTitle>Current Skills</SkillListTitle>
  <SkillListWrapper>
    {skills.map((skill, index) => (
      <SkillListItem key={index}>
        <SkillListText>{skill}</SkillListText>
        <SkillListButton onClick={() => handleRemoveSkill(index)}>
          &#10005;
        </SkillListButton>
      </SkillListItem>
    ))}
  </SkillListWrapper>
</SkillListContainer>


  <ModalButtonContainer>
          <ModalSaveButton type="submit" onClick={handleSaveSkills}>
            Save
          </ModalSaveButton>
          
        </ModalButtonContainer>
</form>
  )
}

export default SkillModal
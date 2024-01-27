import React from 'react'
import { Skill } from '../../styles/shared.styles';

function Skills({ total_skill, text, ...props }) {
    const skills = total_skill;
  const colors = ["#FFC5C5", "#C5FFED", "#E2C5FF", "#FFC5EB", "#FFFDC5"];
  const getColor = () => {
    const index = skills.indexOf(text);
    return colors[index % colors.length];
  };
  return (
    <Skill color={getColor()}>
  {text}
</Skill>
  )
}

export default Skills
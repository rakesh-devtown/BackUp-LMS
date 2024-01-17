import React from 'react'

function Skills({ total_skill, text, ...props }) {
    const skills = total_skill;
  const colors = ["#FFC5C5", "#C5FFED", "#E2C5FF", "#FFC5EB", "#FFFDC5"];
  const getColor = () => {
    const index = skills.indexOf(text);
    return colors[index % colors.length];
  };
  return (
    <div
    style={{
    
      backgroundColor: getColor(),
      padding : "8px", 
      margin : "3px", 
      borderRadius:   "4px",
    }}
  >
    {text}
  </div>
  )
}

export default Skills
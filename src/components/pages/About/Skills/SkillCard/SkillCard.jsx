import React from 'react';

const SkillCard = ({ skill }) => {

    const cardClassName = "icon " + skill.style;

  return (
    <div className={cardClassName}>
        <div title={skill.nombre} className='skill-icon'>{skill.icon}</div>
    </div>
  )
}

export default SkillCard
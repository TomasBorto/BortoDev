import React from 'react';
import './Skills.css';
import SkillCard from './SkillCard/SkillCard';
import { SkillsData } from './SkillsData';

// return (
//   <section className='skills'>
//       <h1>Mis skills</h1>
//       <div className='skills-grid'>
//           <span className='html' title="HTML5"><FaHtml5 /></span>
//           <span className='css' title="CSS3"><FaCss3 /></span>           
//           <span className='node' title="NODEJS"><SiNodedotjs /></span>
//           <span className='js' title="JAVASCRIPT"><FaJs /></span>
//           <span className='react' title="REACT"><FaReact /></span>
//           <span className='tail' title="TAILWINDCSS"><SiTailwindcss /></span>
//           <span className='boot' title="BOOTSTRAP"><FaBootstrap /></span>
//           <span className='sass' title="Sass"><FaSass /></span>
//           <span className='mongodb' title="MONGODB"><SiMongodb /></span>
//           <span className='solidity' title="SOLIDITY"><SiSolidity /></span>
//       </div>
//   </section>
// )

function Skills() {

  const data = SkillsData

  return(
    <section className='skilss'>
      <h1 className='skill-title'>Skills</h1>
      <div className='skills-container'>
        {data.map((item) => {
          return(
            <div className='skills-section'>
              <h3 className='skill-subtitle'>{item.type}</h3>
              <div className='skill-list'>
                {item.list.map((skill) => {
                  return(
                    <SkillCard skill={skill}/>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
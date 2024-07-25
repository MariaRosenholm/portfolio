import React from "react";
import OpenInTab from "./link"
import Skills from "../assets/skills.json"

const Details = () => {


  return (
    <div className="details">
      <div  id="contact">
      <p>Thank you for checking my portfolio! </p>
      <p>

The hospitality industry used to be my field, but I have now shifted the direction of my career to IT. 
I have gained my skills by studying and doing my own projects. 

From working at Tietoevry Banking I have had amazing opportunity to learn more about the Administrative side, Service Management and integrations. 

My extensive experience in customer service and sales from the hospitality industry combined with all the technical knowledges gives me the best understanding from both worlds! 

Please check my  <a id="link" onClick={OpenInTab}  href={"https://github.com/MariaRosenholm"}>GitHub</a> for more details about my coding projects!
</p>
        <p>This portfolio is still under development, but if you wish to contact me please either send message in <a id="link" onClick={OpenInTab}  href={"https://www.linkedin.com/in/mariarosenholm/"}>LinkedIn</a>  or send me an email <a id="link" onClick={(e) => {window.location.href ='mailto:contact@mariarosenholm.com';}} href={"mailto:contact@mariarosenholm.com"}>contact@mariarosenholm.com</a></p>
        </div>
        <div id="skills"><h3>Operational Skills</h3>{Skills.DevOpsSkills.map((skill,i) => <p>{skill}</p>)}</div>
        <div id="skills"><h3>Tech Skills</h3>{Skills.TechSkills.map((skill, i) => <p>{skill}</p>)}</div>
    </div>
  );
};

export default Details;

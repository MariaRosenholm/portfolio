import React from "react";
import OpenInTab from "./link"
import Skills from "../assets/skills.json"
import { useEffect, useState } from "react";

const Details = () => {
  const [skills, setSkills] = useState(Skills.TechSkills);
  const [button1, setButton1] = useState("clicked");
  const [button2, setButton2] = useState("");

  useEffect(() => {
    setSkills(Skills.TechSkills);
    setButton1("clicked");
  }, []);

  const clickHandler = () => {
    button1.includes("clicked") ? setButton1("") : setButton1("clicked");
    button1.includes("clicked") ? setSkills(Skills.DevOpsSkills) : setSkills(Skills.TechSkills);
    button2.includes("clicked") ? setButton2("") : setButton2("clicked");
    button2.includes("clicked") ? setSkills(Skills.TechSkills) : setSkills(Skills.DevOpsSkills);
  };


  return (
    <div className="details">
      <div  id="contact">
        <div id="backgroud" ></div>
      <p>Thank you for checking my portfolio! </p>
      <p>

My name is Maria Rosenholm and I am interested in Web developing! The hospitality industry used to be my field, but I have now shifted the direction of my career to IT. 
I have gained my skills by studying and doing my own projects. 

From working at Tietoevry Banking I have had amazing opportunity to learn more about the Administrative side, Service Management and integrations. 

My extensive experience in customer service and sales from the hospitality industry combined with all the technical knowledges gives me the best understanding from both worlds! 

Please check my  <a id="link" onClick={OpenInTab}  href={"https://github.com/MariaRosenholm"}>GitHub</a> for more details about my coding projects!
</p>
        <p>This portfolio is still under development, but if you wish to contact me please either send message in <a id="link" onClick={OpenInTab}  href={"https://www.linkedin.com/in/mariarosenholm/"}>LinkedIn</a>  or send me an email <a id="link" onClick={(e) => {window.location.href ='mailto:contact@mariarosenholm.com';}} href={"mailto:contact@mariarosenholm.com"}>contact@mariarosenholm.com</a></p>
        </div> 
        <div id="buttons">
          <button onClick={() => {clickHandler()}} className={button1}>Tech Skills</button> 
          <button onClick={() => {clickHandler()}} className={button2}>Operational Skills</button>
        </div>
        <div id="skills">
         { skills.map((skill, i) => <div id={i}><p>{skill}</p></div>)}
        </div>
    </div>
  );
};

export default Details;

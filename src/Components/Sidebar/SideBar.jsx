import React from 'react'
import { AiFillGithub,AiFillTwitterCircle,AiFillLinkedin,AiFillFacebook } from "react-icons/ai";
import {SiGmail} from "react-icons/si"
import styled from './SideBar.module.css'
const SideBar = () => {
  return (
    <div className={styled.fix}>

           
          
          <a
              className={styled.color3}
              href="https://github.com/Arvind693" target="_blank"
            >
              <AiFillGithub className={styled.color1}/><br/>
            </a>
            <a className={styled.color3}
               href="mailto:arvindkuar331@gmail.com" target="_blank"
            ><SiGmail className={styled.color} /><br/></a>
            <a
              className={styled.color3}
              href="https://twitter.com/Arvindk16955432" target="_blank"
            >
              <AiFillTwitterCircle className={styled.color}/><br/>
            </a>     <a
              className={styled.color3}
              href="https://www.linkedin.com/in/arvind-kumar-4a0578218/" target="_blank"
            >
              <AiFillLinkedin className={styled.color}/><br/>
            </a>     <a
              className={styled.color3}
              href="https://m.facebook.com/100013079683912/" target="_blank"
            >
              <AiFillFacebook className={styled.color}/><br/>
            </a>
           
    
    </div>
  )
}

export default SideBar

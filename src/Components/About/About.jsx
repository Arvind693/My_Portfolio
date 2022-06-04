import React from 'react'
import styled from "./About.module.css"
import img from '../files/IMG_20220528_142349.png'

const About = () => {
  return (
    <div id="about" className={styled.flex}>
      <div className={styled.div1}>
          <p className={styled.top}>I'm a full stack web developer specialized in MERN stack, passionate about coding and learning new technologies.</p>
          <p>Adept at learning, unlearning, and relearning.As a developer, my hunger for learning has increased continuously.</p>
          <p>I want to learn more and do something meaningful with my learning.</p>
      </div>
      <div className={styled.div2}>
          <img className={styled.img} src={img} alt="photo1"/>
      </div>
    </div>
  )
}

export default About

import React, { useState } from 'react'
import styled from './Project.module.css'
import { AiFillGithub } from 'react-icons/ai'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import Modal from 'react-modal'
const Project = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [isOpen4, setIsOpen4] = useState(false)
  const [isOpen5, setIsOpen5] = useState(false)
  return (
    <div id="project">
      <h1 className={styled.mid}>Projects</h1>
      <div className={styled.width}>
        <div className={styled.left}>
          <img
            className={styled.img}
           src="https://www.bing.com/images/blob?bcid=S474hYoO2h0EWA"    alt="logo"
          />
        </div>
        <div className={styled.right}>
          <h4 className={styled.color}>Featured</h4>
          <h2>Zoomcar</h2>
          <div className={styled.box}>
            <p>
            Zoomcar, is an Indian self-drive car rental company, headquartered in Bangalore, India. The company was founded in 2013 by David Back and Greg Moran .[2] It currently operates in 34+ cities.
              {/* <p className={styled.blue} onClick={() => setIsOpen(true)}>
                Read More
              </p> */}
            </p>
            {/* <Modal className={styled.background} isOpen={isOpen}>
              <h1>Airbnb</h1>
              <p>
                Airbnb allows you to find places to stay directly from
                individuals in thousands of cities around the India.
              </p>
              <p>
                A website that allows users to rent or lease accommodation not
                limited to bed and breakfasts, hostels, homestays, apartments,
                rooms, or hotels.
                <h3>
                  {' '}
                  Tech Stack: React, Redux, Thunk, NodeJs, Mongoose, MongoDB,
                  Express, Material UI, Axios
                </h3>
                A collaborative project in 5 days with 2 people
                <br />
                Roles & Responsibility: 1.A user can sign in or sing up 2.Google
                location API with google-maps to locate live places 3.i18next to
                translate a website from English to Hindi vice versa. 4.Build a
                backend with all functionality like fetching, mapping, sorting.
                5. Build Hotel List page 6.Build a host page to rent their
                property.
              </p>
              <button onClick={() => setIsOpen(false)} className={styled.btn}>
                Close
              </button>
            </Modal> */}
          </div>
          <h5>NodeJS | HTML | MongoDb | CSS | Express | JavaScript</h5>
          <div className={styled.flex}>
            <a
              className={styled.size}
              href="https://github.com/Arvind693/zoomcar_clone"
            >
              {' '}
              <AiFillGithub className={styled.size} />
            </a>
            <a
              className={styled.size}
              href="https://strong-creponne-678bd3.netlify.app/"
            >
              < BsBoxArrowUpRight className={styled.size} />
            </a>
          </div>
        </div>
      </div>
         {/* ----project2 */}
         <div className={styled.width}>
        <div className={styled.left}>
          <img
            className={styled.img}
           src="https://www.bing.com/images/blob?bcid=S7ddM8EKeR0EyA" alt="logo"
          />
        </div>
        <div className={styled.right}>
          <h4 className={styled.color}>Featured</h4>
          <h2>TomTop</h2>
          <div className={styled.box}>
            <p>
            TomTom N.V. is a Dutch multinational developer & creator of navigation technology and consumer electronics. Founded in 1991 and headquartered in Amsterdam, TomTom released its first generation of satellite navigation devices to market in 2004.
              {/* <p onClick={() => setIsOpen1(true)}  className={styled.blue}>
                Read More
              </p> */}
            </p>
            {/* <Modal className={styled.background} isOpen={isOpen1}>
              <h1>LinkedIn</h1>
              <p>
              This is the clone of LinkedIn, which is a web application primarily used for professional networking and career development.
              You can invite anyone to connect (and accept their invitations to connect with you), but they must have their own LinkedIn account to use the site. LinkedIn saves the connections that you make to a list called My Network.
              </p>
              <p>
                
LinkedIn enables you to network with people and professional organizations in your industry.
                <h3> Tech Stack: React, Redux, Firebase, Styled-Components</h3>
                A collaborative project in 5 days with 4<br />
                people. Roles & Responsibility: Built a profile page of the
                user. Get and Post and Update data of profile page using firebase.
              </p>
              <button onClick={() => setIsOpen1(false)} className={styled.btn}>
                Close
              </button>
            </Modal> */}
          </div>
          <h5>Html | CSS | Javascrepit</h5>
          <div className={styled.flex}>
            <a
              href="https://github.com/Arvind693/Tomtop-Clone"
              className={styled.size}
            >
              {' '}
              <AiFillGithub className={styled.size} />
            </a>
            <a
              href="https://rococo-mousse-8e7cdf.netlify.app/"
              className={styled.size}
            >
              < BsBoxArrowUpRight className={styled.size} />{' '}
            </a>
          </div>
        </div>
      </div>
  
      
      
    </div>
  )
}

export default Project

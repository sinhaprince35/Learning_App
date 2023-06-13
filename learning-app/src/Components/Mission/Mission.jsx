import React from 'react'
import './mission.css'

const Mission = () => {
  return (
    <div className='mission-container'>
          <div className='missionTitle'>
              <h2><span className='line'>_____</span>MISSION<span className='line'>_____</span></h2>
          </div>
          <div className='content'>
              <p className='para'>The mission of this series is to take you from <b>Zero to Hero in React</b>. During this journey, you will learn everything by watching videos and then implement it by building projects.</p>
              <p className='para'>The curriculum is designed with the principle of `learn by building`, so there will be a lot of Assignments/Projects you will work on. So only register if you are ready for a grind.</p>
              <p className='para'>After this series, you will be able to develop production-ready React frontend web applications from scratch.</p>
              <p className='para'>Limited seats. Register Now. ✌️</p>
          </div>
          <div>
              <button className='button-2'>ENROLL NOW</button>
          </div>
    </div>
  )
}

export default Mission

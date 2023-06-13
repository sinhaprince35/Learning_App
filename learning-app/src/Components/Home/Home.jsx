import React from "react";
import "./home.css";
import Image from './pngwing.png'


const Home = () => {
  return (
    <div className="container">
      <div className="left-container">
        {/* Making Rocket Emoji using unicode */}
        <h1 className="heading-1">
          Frontend Developer Series <span>&#x1F680;</span>
        </h1>
        <h2 className="heading-2">from Zero to Hero</h2>
        <div className="desciption">
        <h3><span>&#9989;</span>Project Based Learning</h3>
        <h3><span>&#9989;</span>Assignments/Projects</h3>
        <h3><span>&#9989;</span>Premium community of Developers</h3>
        <h3><span>&#9989;</span>Free Access to all Course Content</h3>
        <h3><span>&#9989;</span>In depth High Quality Videos</h3>
        </div>
        <div className="btn">
          <button>Get Started</button>
        </div>
      </div>
      <div className="right-conatiner">
        <img className='image' src={Image} alt=""/>
      </div>
    </div>
  );
};

export default Home;

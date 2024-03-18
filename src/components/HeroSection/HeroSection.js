import React from "react";
import "../../App.css";
import { Button } from "../Button/Button";
import "./HeroSection.css";
import clip from "../../assets/video.mp4"

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={clip} autoPlay loop muted />
      <h1> PLANTING AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className='far
          fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

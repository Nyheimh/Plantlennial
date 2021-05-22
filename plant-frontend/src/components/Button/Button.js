import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
//if one btn style is not chosen then defaults to primary
const STYLES = ["btn--primary", "btn--outline"];
// if btn size is not chosen then defaults to primary
const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {

  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  return (
    <Link to="/plants" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>

      {/* <Button>Get Started</Button> */}
    </Link>
  )
};

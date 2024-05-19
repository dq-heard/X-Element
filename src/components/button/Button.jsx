import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  const buttonRef = React.createRef();

  const buttonHoverRipple = (event) => {
    event.target.style.setProperty("--top", `${event.offsetY}px`);
    event.target.style.setProperty("--left", `${event.offsetX}px`);
  };

  useEffect(() => {
    const button = buttonRef.current;
    if (button) {
      button.addEventListener("mousemove", buttonHoverRipple);
    }

    return () => {
      if (button) {
        button.removeEventListener("mousemove", buttonHoverRipple);
      }
    };
  }, []);

  const Tag = props.to ? Link : "a";

  return (
    <Tag
      to={props.to}
      href={props.href || "#!"}
      className={`btn ${props.className}`}
      data-btn
      ref={buttonRef}
      onClick={props.onClick}
    >
      {props.text}
    </Tag>
  );
};

export default Button;

import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <li className={props.className} data-aos="zoom-in">
      <img className="card-image" src={props.src} alt={props.alt} />
      <div className="card-overlay"></div>
      <h3 className="card-heading">
        <Link to="/team" className="card-title">
          {props.title}
        </Link>
      </h3>
    </li>
  );
};

export default Card;

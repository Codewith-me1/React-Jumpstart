import React from "react";
import { Link } from "react-router-dom";

interface Props {
  link: string;
  title: string;
  text: string;
}
const CardItems = (props: Props) => {
  return (
    <>
      <div className="card">
        <div className="card_img">
          <img src="img-1.jpg" alt="image" className="card-img-top" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <Link to={props.link} className="btn btn-primary">
            {props.title}
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardItems;

import React from "react";
import Avatar from "./Avatar";
import Phone from "./Phone";

function Card(props) {
    return (
        <div className="card">
          <div className="top">
            <h2 className="name">{props.name}</h2>
            <Avatar img={props.img} />
            
          </div>
          <div className="bottom">
          <Phone phonedetail = {props.tel} />
          <Phone phonedetail = {props.email} />
          </div>
        </div>
      );
}

export default Card;
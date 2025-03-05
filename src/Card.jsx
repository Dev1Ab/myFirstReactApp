import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";



function Card (props){
    return (
        <div className="contact-card">
        <h2>{props.keyval} {props.name}</h2>
        <Avatar img={props.img}  />
        <div>
        <Details detailInfo={props.tel} />
        <Details detailInfo={props.email} />
        </div>
    </div>)
}

export default Card;
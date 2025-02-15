import React from "react";
import './Card.css'


import calendar from "../assets/calender.svg"

export default function Card({data}){
    return(
        <div className="wrapper">
            <div className="card">
                <div className="imageCont">
                <img className="cardImg" src={data.bgimage} alt="" />
                <img className="cardlogo" src={data.bglogo} alt="" />
                </div>
                <div className="content">
                <div className="EventName">{data.EventName}</div>
                <div className="dates"><span><img src={calendar} alt="" /></span><span className="text">{data.eventDate}</span></div>
                <div className="place"><img src={data.flag} alt=""/><span>{data.eventPlace} </span></div>
                <div className="sports">{data.eventType}</div>
                </div>
            </div>
        </div>
    )
}
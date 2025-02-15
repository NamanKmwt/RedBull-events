import React from "react";
import "./Tile.css"


export default function Tile({tiledata}) {

    return (
        
        <div className="tile-wrapper">
            <div className="eventImg">
                <img className="bgimg" src={tiledata.tileImg} alt="" />
                <div className="Imglogo">
                <img className="ImageLogo" src={tiledata.tileImgLogo } alt="" />
                </div>
            </div>
            <div className="eventContent">
                <div className="mainContent">
                    <div className="eventType">{tiledata.tileEventType}</div>
                    <div className="detailsCont">
                        <h2>{tiledata.tileEventHeading}</h2>
                        <p>{tiledata.tileEventInfo}</p>
                    </div>
                    <div className="eventPlace"><img src={tiledata.tilePlaceFlag} alt="" />{tiledata.tileEventPlace}</div>
                </div>
                <div className="eventDate">
                    
                    <span className="startDate">{tiledata.tileEventStartDay}</span>
                    <span className="dash">-</span>
                    <span className="endDate">{tiledata.tileEventEndDay}</span>
                    <span className="monthCont">
                    <span className="startMonth">{tiledata.tileEventStartMonth}</span>
                    <span className="endMonth">{tiledata.tileEventEndMonth}</span>
                    </span>
                   
                </div>
            </div>
        </div>
    )
}
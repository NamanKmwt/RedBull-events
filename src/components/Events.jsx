import React from "react";
import "./Events.css"
import dots from "../assets/events/more_vert_24dp_000_FILL0_wght400_GRAD0_opsz24.png"
import Slider from "./Slider";
import Tile from "./Tile";
import { tiledata } from "../assets/tiledata";


function Events() {

    let tiledatas = [];
    tiledata.map((obj) => {
            tiledatas.push(obj);
        })

    return (
        <>
        <div className="bgtop">
            <div className="randomText">
                <h1>Events</h1>
                <h5>
                    Discover worldwide Red Bull events. Explore the event calendar to see past and upcoming events: bike, motorsport, surfing, winter sport, music, gaming and much more.
                </h5>
            </div>
        </div>
        <div className="events-Container">
        <div className="eventsTile">
            <Slider/>
        </div>
    </div>
    <div className="interests">
        <h1>Find Events by Interest</h1>
        <div className="filter">
            <div className="left">
                <span className="filterText">FILTER BY</span>   
                <select name="countries" id="countires" >
                    <option value="" disabled selected hidden>All countires</option>
                    <option value="india">India</option>
                    <option value="india">Australia</option>
                    <option value="india">US</option>
                    <option value="india">UK</option>
                </select>
                <select name="countries" id="countires" >
                    <option value="" disabled selected hidden>All disciplines</option>
                    <option value="india">India</option>
                    <option value="india">Australia</option>
                    <option value="india">US</option>
                    <option value="india">UK</option>
                </select>
            </div>
            <div className="right">
               <div className="up-past toggle-btn">
                <span className="upcoming">Upcoming</span>
                <span className="past">Past</span>
                </div>
               <div className="all-live toggle-btn">
                <span className="all">All</span>
                <span className="live">Live</span>
               </div>
            </div>
        </div>
        <div className="lists">
            <Tile className="tiles" tiledata={tiledatas[0]}/>
            <Tile className="tiles" tiledata={tiledatas[1]}/>
            <Tile className="tiles" tiledata={tiledatas[2]}/>
            <Tile className="tiles" tiledata={tiledatas[3]}/>
            <Tile className="tiles" tiledata={tiledatas[4]}/>
            <Tile className="tiles" tiledata={tiledatas[5]}/>
        </div>
        <div className="loadMore">
        <button ><img src={dots} alt="" /> Load More</button>
        </div>

    </div>
        </>
    )
}

export default Events;
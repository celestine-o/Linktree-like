import React from "react";
import I4G from "/src/assets/I4G.png"
import Zuri from "/src/assets/Zuri_Logo.png"

export default function Footer() {
    
    return (
        <div className="footer">
        <a href="" className="zuri">
            <img src={Zuri} alt="Zuri logo" />
        </a>
        <a href="" className="hng">HNG Intenship 9 Frontend Task</a>
        <a href="" className="i4g">
            <img src={I4G} alt="ingressive for good" />
        </a>
        </div>
    )
}
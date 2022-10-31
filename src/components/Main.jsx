import React from "react";
import Link from "./Link";
import profile_img from "/src/assets/profile_img.png";
import Slack_icon from "/src/assets/slack.png";
import {GoMarkGithub} from "react-icons/go";
import Desktop_share from "/src/assets/share_button.png"
import Mobile_share from "/src/assets/mobile_share_button.png"

export default function Main() {

    return(
        <div className="main">
            <img src={window.innerWidth > 500 ? Desktop_share : Mobile_share} alt="" className="share_button" />
            <section className="profile">
                <img src={profile_img} alt="profile image" className="profile_img" id="profile_img"/>
                <p className="profile_name" id="twitter">Annete Black</p>
                <p className="slack_name" id="slack">Celestine</p>
            </section>
            <Link />
            <section className="social">
                <a href="" className="slack-link" id="slack_link">
                    <img src={Slack_icon} alt="slack" className="slack_icon" />
                </a>
                <a href="https://github.com/celestine-o" className="github-link" id="github">
                    <GoMarkGithub className="github_icon"/>
                </a>
            </section>
        </div>
    )
}
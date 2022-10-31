import React from "react";
import Link from "./Link";
import profile_img from "/src/assets/profile_img.png";
import Slack_icon from "/src/assets/slack.png";
import {GoMarkGithub} from "react-icons/go";

export default function Main() {

    return(
        <div className="main">
            <section className="profile">
                <img src={profile_img} alt="profile image" className="profile_img" id="profile_img"/>
                <p className="profile_name">Annete Black</p>
            </section>
            <Link />
            <section className="social">
                <a href="" className="slack-link" id="slack">
                    <img src={Slack_icon} alt="slack" className="slack_icon" />
                </a>
                <a href="" className="github-link" id="github">
                    <GoMarkGithub className="github_icon"/>
                </a>
            </section>
        </div>
    )
}
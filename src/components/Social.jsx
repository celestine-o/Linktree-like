import React from "react";
import Slack_icon from "/src/assets/slack.png";
import {GoMarkGithub} from "react-icons/go";

export default function Social() {

    return(
        <div className="social">
            <a href="" className="slack-link">
                <img src={Slack_icon} alt="slack" className="slack_icon" />
            </a>
            <a href="" className="github-link">
                <GoMarkGithub className="github_icon"/>
            </a>
        </div>
    )
}
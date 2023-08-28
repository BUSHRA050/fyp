import React from "react";
import Intro from "../../../components/intro";
import HomeData from "../../../data/home.json";

const IntroContainer = () => {
    return (
        <div className="section position-relative">
            <Intro data={HomeData[0].slider[0]} />
        </div>
    );
};

export default IntroContainer;

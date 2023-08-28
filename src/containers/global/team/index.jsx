import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "../../../components/section-title";

const TeamContainer = ({ classOption }) => {
    return (
        <div className={`team-section overflow-hidden pb-8 pt-8`}>
            <div className="container position-relative">
                <div className="row align-items-center">
                    <div className="col-12">
                        <div className="team-content-wrap">
                            <center>
                                <SectionTitle
                                    classOption="title-section"
                                    title="Reviewed By  The Community <br>Trusted  By  Professionals"
                                    excerptClassOption="mb-8"
                                />
                            </center>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="team-content-wrap">
                            <SectionTitle
                                classOption="title-section"
                                title="4.8 out of 5"
                                excerptClassOption="mb-5"
                            />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="team-content-wrap">
                            <SectionTitle
                                classOption="title-section"
                                title=""
                                excerptClassOption="mb-5"
                                excerpt="User-friendly interface and customizable templates made creating my resume a breeze. Highly recommended for anyone looking to showcase their skills.Ruba Waseem About 18 hours "
                            />
                        </div>
                    </div>{" "}
                    <div className="col-lg-3">
                        <div className="team-content-wrap">
                            <SectionTitle
                                classOption="title-section"
                                title=""
                                excerptClassOption="mb-5"
                                excerpt="Sleek and professional resume website platform. Impressed with the variety of design options and seamless integration of my content. A valuable tool for job seekers.Shiza Humayun About 22 hours "
                            />
                        </div>
                    </div>{" "}
                    <div className="col-lg-3">
                        <div className="team-content-wrap">
                            <SectionTitle
                                classOption="title-section"
                                title=""
                                excerptClassOption="mb-5"
                                excerpt="Game-changer for job hunters! The modern layouts and intuitive features transformed my traditional resume into a dynamic online portfolio.Yusra Afzal About 16  hours "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

TeamContainer.propTypes = {
    classOption: PropTypes.string,
};

export default TeamContainer;

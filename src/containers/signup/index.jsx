import React from "react";
import { NavLink } from "react-router-dom";
import SignupForm from "../../components/signup-from";
import SocialIcon from "../../components/social-icon";

const ContactContainer = () => {
    return (
        <section className="contact-section section-py">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-4 col-lg-4 text-center bg-white rounded-lg p-6 px-8">
                        <div className="contact-title-section">
                            <h1>
                                <strong>Sign up</strong>
                            </h1>
                            <p className="mt-4" style={{ fontSize: "18px" }}>
                                Already Registered?{" "}
                                <NavLink to={process.env.PUBLIC_URL + "/login"}>
                                    Login
                                </NavLink>
                            </p>
                        </div>
                        <SignupForm />
                        <div className="contact-title-section pt-6">
                            <p style={{ fontSize: "18px" }}>
                                ---------- OR SIGNUP WITH? ------------
                            </p>
                            <ul className="footer-social-links justify-content-center">
                                <li>
                                    <SocialIcon
                                        classOption="footer-social-link"
                                        path="https://www.facebook.com/"
                                        icon="icofont-facebook"
                                    />
                                </li>
                                <li>
                                    <SocialIcon
                                        classOption="footer-social-link"
                                        icon="icofont-google-plus"
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactContainer;

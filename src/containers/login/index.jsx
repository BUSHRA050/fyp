import React from "react";
import { NavLink } from "react-router-dom";
import ContactForm from "../../components/login-from";

const ContactContainer = () => {
    return (
        <section className="contact-section section-py">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-4 col-lg-4 text-center bg-white rounded-lg p-6 px-8">
                        <div className="contact-title-section">
                            <h1>
                                <strong>Login</strong>
                            </h1>
                            <p>Login to your account</p>
                        </div>
                        <ContactForm />
                        <div className="contact-title-section pt-6">
                            <p style={{ fontSize: "18px" }}>
                                Forgot Your Password?
                                <br className="d-none d-xl-block" />
                                Dont have an account?{" "}
                                <NavLink
                                    to={process.env.PUBLIC_URL + "/signup"}
                                >
                                    Sign Up
                                </NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactContainer;

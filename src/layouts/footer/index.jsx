import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/logo";

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-top position-relative">
                <div className="container">
                    <div className="row mb-n7">
                        <div className="col-lg-3 col-sm-6 mb-7">
                            <div className="footer-widget">
                                <Logo
                                    classOption="footer-logo mb-4"
                                    image={`${process.env.PUBLIC_URL}/images/logo/logo-footer.png`}
                                />
                                <p>
                                    BHS Resume is the largest talent platform in
                                    Pakistan for career development and
                                    recruitment.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-7">
                            <div className="footer-widget">
                                <h4 className="title">Product</h4>
                                <ul className="footer-menu">
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={process.env.PUBLIC_URL + "/#"}
                                        >
                                            AI Resume
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={process.env.PUBLIC_URL + "/#"}
                                        >
                                            Cover Letter
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={process.env.PUBLIC_URL + "/#"}
                                        >
                                            Find Job
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-7">
                            <div className="footer-widget">
                                <h4 className="title">Our Company</h4>
                                <ul className="footer-menu">
                                    <li>
                                        <Link className="footer-link">
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="footer-link">
                                            PRIVACY POLICY
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="footer-link">
                                            TERMS OF USE
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-7">
                            <div className="footer-widget">
                                <h4 className="title">Support</h4>
                                <ul className="footer-menu">
                                    <li>
                                        <Link className="footer-link">FAQ</Link>
                                    </li>
                                    <li>
                                        <Link className="footer-link">
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="copyright-info text-center">
                                <p>
                                    Copyright &copy; 2023 Made with BHS Resume
                                    By , All Rights Reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

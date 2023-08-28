import { useEffect, useRef } from "react";
import Button from "../../../components/button";
import SectionTitle from "../../../components/section-title";
import Parallax from "parallax-js";

const HomeAboutContainer = () => {
    const sceneEl = useRef(null);

    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
            relativeInput: true,
        });

        parallaxInstance.enable();

        return () => parallaxInstance.disable();
    }, []);
    return (
        <div className="about-us position-relative">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-content">
                            <SectionTitle
                                classOption="title-section"
                                title="Find the job of <br>your 
                                <span style='color:#F2994A;'>
                                    Dreams
                                </span>"
                            />
                            <p className="mb-5">
                                Pleasure rationally encounter consequences that
                                are extremely painful. Nor again is there anyone
                                who loves or pursues or desires to obtain
                            </p>
                            <Button
                                classOption="btn btn-lg btn-dark btn-hover-dark"
                                text="Learn more"
                                path="/about"
                            />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div
                            className="about-photo scene text-center text-lg-left"
                            id="scene"
                            ref={sceneEl}
                        >
                            <div data-depth="0.2">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/slider/images2.png`}
                                    alt="about"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAboutContainer;

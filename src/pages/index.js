import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import BrandContainer from "../containers/global/brand/index";
import TeamContainer from "../containers/global/team";
import HomeAboutContainer from "../containers/home/about";
import IntroContainer from "../containers/home/intro";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const HomePage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="BHS Resume - With AI Resume Builder" />
                <div className="wrapper">
                    <Header />
                    <IntroContainer />
                    <HomeAboutContainer />
                    <BrandContainer />
                    <TeamContainer />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default HomePage;

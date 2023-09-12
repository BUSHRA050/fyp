import React from "react";
import Layout from "../../layouts/index";
import SEO from "../../components/seo/index";
import SignupContainer from "../../containers/signup/index";

const HomePage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="BHS Resume - With AI Resume Builder" />
                <div className="wrapper">
                    <SignupContainer />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default HomePage;

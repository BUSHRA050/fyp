import React from "react";
import Layout from "../../layouts/index";
import SEO from "../../components/seo/index";
import LoginContainer from "../../containers/login/index";

const HomePage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="BHS Resume - With AI Resume Builder" />
                <div className="wrapper">
                    <LoginContainer />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default HomePage;

import PropTypes from "prop-types";

const Brand = ({ data }) => {
    return (
        <div className="single-brand">
            <img
                src={process.env.PUBLIC_URL + data.image}
                alt="brand logo"
                height="80px"
            />
        </div>
    );
};

Brand.propTypes = {
    data: PropTypes.object,
};

export default Brand;

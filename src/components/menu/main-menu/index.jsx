import { NavLink } from "react-router-dom";
import Button from "../../../components/button";

const MainMenu = () => {
    return (
        <nav className="main-menu d-none d-lg-block">
            <ul className="d-flex justify-content-end align-items-center">
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/#"}>
                        Resume AI
                    </NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/#"}>
                        Cover Letter
                    </NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/#"}>
                        Find Jobs
                    </NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/login"}>
                        Login
                    </NavLink>
                </li>
                <li>
                    <Button
                        classOption="btn btn-lg btn-orange"
                        text="Sign Up"
                        path={process.env.PUBLIC_URL + "/signup"}
                    />
                </li>
            </ul>
        </nav>
    );
};

export default MainMenu;

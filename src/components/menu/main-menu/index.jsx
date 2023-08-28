import { NavLink } from "react-router-dom";

const MainMenu = () => {
    return (
        <nav className="main-menu d-none d-lg-block">
            <ul className="d-flex">
                <li>
                    <NavLink exact to="/">
                        Home
                    </NavLink>
                </li>
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
                    <NavLink to={process.env.PUBLIC_URL + "/#"}>Login</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default MainMenu;

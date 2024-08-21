import "./Header.scss";
import icon from "../../assets/logo/phora-logo.svg";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img className="header__icon" src={icon} alt="Logo" />
            </Link>
            <div className="header__links">
                <button className="header__button">reflect</button>
                <button className="header__button">reflections</button>
            </div>
        </div>
    );
}

export default Header;

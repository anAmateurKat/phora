import "./Header.scss";
import icon from "../../assets/logo/phora-logo.svg";

function Header() {
    return (
        <div className="header">
            <img className="header__icon" src={icon} alt="Logo" />
            <div className="header__links">
                <button className="header__button">reflect</button>
                <button className="header__button">reflections</button>
            </div>
        </div>
    );
}

export default Header;

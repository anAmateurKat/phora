import "./Footer.scss";
import githubLogo from "../../assets/icons/github-mark.svg";
import linkedInLogo from "../../assets/icons/linkedin-icon.svg";

function Footer() {
    return (
        <div className="footer">
            <div>
                <div className="footer__contact">
                    <h2 className="footer__title">Get in touch</h2>
                    <p className="footer__text">A haven for curious minds. </p>
                    <p className="footer__text">
                        Expand your vocabulary and ignite your creativity.
                    </p>
                    <div className="footer__icons">
                        <img
                            className="footer__icons-github"
                            src={githubLogo}
                            alt="Github Logo"
                        />
                        <img
                            className="footer__icons-linkedin"
                            src={linkedInLogo}
                            alt="LinkedIn Logo"
                        />
                    </div>
                </div>
                <div className="footer__about">
                    <div className="footer__about-link">
                        {" "}
                        <p>About us</p>
                    </div>
                </div>
            </div>
            <div className="footer__copyright">
                <p className="footer__copyright-text">Phora | 2024</p>
            </div>
        </div>
    );
}

export default Footer;
